import { DEMFromTIFF, triangulateDEM } from "./modules/process.js";
import { renderTriangles } from "./modules/render.js";
import { exportAsSTL } from "./modules/export.js";
import { createMap, getBBox, computeBBoxSurfaceArea } from "./modules/map.js";

const DEMWarningThreshold = 1000000;
const surfaceAreaWarningThreshold = 1;
const largeAreaWarningMessage =
  "Warning: your input specifies a very large area. It will take a long time to process and may fail due to resource limitations. Proceed anyway?";

/*
 * As of 2022, the OpenTopography API requires a (free) key for access to all DEM datasets. Keys aim
 * to help the OpenTopography team better understand their traffic.
 *
 * I include the key here to maintain the ability to serve this site statically with GitHub Pages.
 * If you're tempted to use the key below, I kindly request that you generate your own:
 * OpenTopography keys can be generated and used for free. Generating your own is quick and easy
 * (see https://opentopography.org/blog/introducing-api-keys-access-opentopography-global-datasets).
 */
const OTSuffix64 = [
  "M5MjQ5Y2JhNGQ=",
  "ZGNhODkzY2M1Nm",
  "I1YmVhNGJmYjBl",
  "JkFQSV9LZXk9M2",
]
  .reverse()
  .join("");

let currentDEM;
let currentGeometry;
let inputChanged = true;

// DOM Elements
let bboxRadioButtonElement;
let fileRadioButtonElement;
let mapRadioButtonElement;
let bboxNorthElement;
let bboxSouthElement;
let bboxEastElement;
let bboxWestElement;
let fileInputElement;
let dataSourceFormElement;
let downloadButtonElement;
let loadingSpinnerElement;
let fileFieldsetElement;
let bboxFieldsetElement;
let mapFieldsetElement;
let modelElement;
let baseHeightElement;
let resolutionElement;
let xScaleFactorElement;
let yScaleFactorElement;
let zScaleFactorElement;
let mapBBoxDetailsWestElement;
let mapBBoxDetailsSouthElement;
let mapBBoxDetailsEastElement;
let mapBBoxDetailsNorthElement;
let generationErrorTextELement;
let generationErrorELement;
let modelInfoElement;
let modelLengthElement;
let modelWidthElement;
let modelHeightElement;
let requiredForBBox, requiredForMap, requiredForFile;

const showElement = (element, show = true) => {
  if (show) {
    if (element.classList.contains("hidden"))
      element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
};

const setRequired = (required, ...elements) => {
  elements.forEach((element) =>
    required
      ? element.setAttribute("required", "required")
      : element.removeAttribute("required")
  );
};

const onFormRadioChange = (event) => {
  const mapSelected = event.target.value === "map";
  const bboxSelected = event.target.value === "bbox";
  const fileSelected = event.target.value === "file";
  showElement(mapFieldsetElement, mapSelected);
  setRequired(mapSelected, ...requiredForMap);
  showElement(bboxFieldsetElement, bboxSelected);
  setRequired(bboxSelected, ...requiredForBBox);
  showElement(fileFieldsetElement, fileSelected);
  setRequired(fileSelected, ...requiredForFile);
};

const parseBoundingBox = () => {
  const west = Number(bboxWestElement.value);
  const south = Number(bboxSouthElement.value);
  const east = Number(bboxEastElement.value);
  const north = Number(bboxNorthElement.value);
  return { west, south, east, north };
};

const parseScaleVector = () => {
  const x = Number(xScaleFactorElement.value);
  const y = Number(yScaleFactorElement.value);
  const z = Number(zScaleFactorElement.value);
  return { x, y, z };
};

const composeOpenTopographyQuery = (bbox) =>
  `https://portal.opentopography.org/API/globaldem?demtype=SRTMGL3&west=${
    bbox.west
  }&south=${bbox.south}&east=${bbox.east}&north=${
    bbox.north
  }&outputFormat=GTiff${atob(OTSuffix64)}`;

const queryOpenTopographyAPI = async (bbox) => {
  let dem;
  const query = composeOpenTopographyQuery(bbox);
  try {
    const response = await fetch(query);
    if (response.ok) {
      const arrayBuffer = await response.arrayBuffer();
      const tiff = await GeoTIFF.fromArrayBuffer(arrayBuffer);
      dem = await DEMFromTIFF(tiff);
    } else {
      showGenerationError(
        `OpenTopography API request failed with status code ${response.status}`
      );
    }
  } catch (error) {
    console.error(error);
    showGenerationError(`OpenTopography API request failed`);
  }

  return dem;
};

const handleFormSubmit = async () => {
  let dem;
  const dataSource = document.querySelector(
    'input[name="source-select"]:checked'
  )?.value;

  if (inputChanged) {
    showElement(loadingSpinnerElement, true);
    if (dataSource === "file") {
      try {
        const tiff = await GeoTIFF.fromBlob(fileInputElement.files[0]);
        dem = await DEMFromTIFF(tiff);
        if (
          dem.data.length > DEMWarningThreshold &&
          !window.confirm(largeAreaWarningMessage)
        ) {
          return;
        }
      } catch (error) {
        console.error(error);
        showGenerationError("Could not process specified file");
        return;
      }
    } else if (dataSource === "bbox" || dataSource === "map") {
      const bbox = dataSource === "bbox" ? parseBoundingBox() : getBBox();
      if (bbox) {
        const surfaceArea = computeBBoxSurfaceArea(bbox);
        if (
          surfaceArea < surfaceAreaWarningThreshold ||
          window.confirm(largeAreaWarningMessage)
        ) {
          dem = await queryOpenTopographyAPI(bbox);
        }
      } else {
        showGenerationError("Specify a valid bounding box");
        return;
      }
    }
  } else {
    dem = currentDEM;
  }

  if (dem) {
    const scaleVector = parseScaleVector();
    const { triangles, dimensions } = triangulateDEM(
      dem,
      Number(baseHeightElement.value),
      Number(resolutionElement.value),
      scaleVector
    );
    renderTriangles(triangles, modelElement);
    currentDEM = dem;
    currentGeometry = triangles;
    inputChanged = false;
    displayModelDimensions(dimensions);
    showElement(modelInfoElement, true);
  }
};

const onFormSubmit = async (event) => {
  event.preventDefault();

  showElement(generationErrorELement, false);
  await handleFormSubmit();
  showElement(loadingSpinnerElement, false);
};

const onDownloadButtonClick = () => {
  if (!currentGeometry) {
    console.error("No geometry to download");
    return;
  }
  exportAsSTL(currentGeometry);
};

const displayBBox = (bbox) => {
  const fmtLatLong = (value) => `${value.toFixed(4)}°`;
  mapBBoxDetailsWestElement.innerText = bbox ? fmtLatLong(bbox.west) : "-";
  mapBBoxDetailsSouthElement.innerText = bbox ? fmtLatLong(bbox.south) : "-";
  mapBBoxDetailsEastElement.innerText = bbox ? fmtLatLong(bbox.east) : "-";
  mapBBoxDetailsNorthElement.innerText = bbox ? fmtLatLong(bbox.north) : "-";
};

const displayModelDimensions = (dimensions) => {
  const fmtValue = (value) => `${value.toLocaleString()}mm`;
  modelLengthElement.innerText = fmtValue(dimensions.length);
  modelWidthElement.innerText = fmtValue(dimensions.width);
  modelHeightElement.innerText = fmtValue(dimensions.height);
};

const showGenerationError = (message) => {
  generationErrorTextELement.innerText = `Error: ${message}`;
  showElement(generationErrorELement, true);
};

const onMapChange = (bbox) => {
  onDataSourceChange();
  displayBBox(bbox);
};

const onDataSourceChange = () => (inputChanged = true);

const loadDOMElements = () => {
  bboxRadioButtonElement = document.getElementById("bbox-radio-button");
  fileRadioButtonElement = document.getElementById("file-radio-button");
  mapRadioButtonElement = document.getElementById("map-radio-button");
  bboxWestElement = document.getElementById("bbox-west");
  bboxSouthElement = document.getElementById("bbox-south");
  bboxEastElement = document.getElementById("bbox-east");
  bboxNorthElement = document.getElementById("bbox-north");
  fileInputElement = document.getElementById("file-input");
  dataSourceFormElement = document.getElementById("data-source-form");
  downloadButtonElement = document.getElementById("download-button");
  loadingSpinnerElement = document.getElementById("data-loading-spinner");
  fileFieldsetElement = document.getElementById("file-fieldset");
  bboxFieldsetElement = document.getElementById("bbox-fieldset");
  mapFieldsetElement = document.getElementById("map-fieldset");
  modelElement = document.getElementById("model");
  baseHeightElement = document.getElementById("model-base-height");
  resolutionElement = document.getElementById("model-resolution");
  xScaleFactorElement = document.getElementById("model-x-scale");
  yScaleFactorElement = document.getElementById("model-y-scale");
  zScaleFactorElement = document.getElementById("model-z-scale");
  mapBBoxDetailsWestElement = document.getElementById("map-bbox-details-w");
  mapBBoxDetailsSouthElement = document.getElementById("map-bbox-details-s");
  mapBBoxDetailsEastElement = document.getElementById("map-bbox-details-e");
  mapBBoxDetailsNorthElement = document.getElementById("map-bbox-details-n");
  generationErrorTextELement = document.getElementById("generation-error-text");
  generationErrorELement = document.getElementById("generation-error");
  modelInfoElement = document.getElementById("model-info");
  modelLengthElement = document.getElementById("model-details-l");
  modelWidthElement = document.getElementById("model-details-w");
  modelHeightElement = document.getElementById("model-details-h");

  requiredForFile = [fileInputElement];
  requiredForBBox = [
    bboxWestElement,
    bboxSouthElement,
    bboxEastElement,
    bboxNorthElement,
  ];
  requiredForMap = [];
};

const addEventListeners = () => {
  bboxRadioButtonElement.addEventListener("click", onFormRadioChange);
  fileRadioButtonElement.addEventListener("click", onFormRadioChange);
  mapRadioButtonElement.addEventListener("click", onFormRadioChange);

  dataSourceFormElement.addEventListener("submit", onFormSubmit);
  downloadButtonElement.addEventListener("click", onDownloadButtonClick);

  bboxRadioButtonElement.addEventListener("click", onDataSourceChange);
  fileRadioButtonElement.addEventListener("click", onDataSourceChange);
  mapRadioButtonElement.addEventListener("click", onDataSourceChange);
  bboxNorthElement.addEventListener("change", onDataSourceChange);
  bboxSouthElement.addEventListener("change", onDataSourceChange);
  bboxEastElement.addEventListener("change", onDataSourceChange);
  bboxWestElement.addEventListener("change", onDataSourceChange);
  fileInputElement.addEventListener("change", onDataSourceChange);
};

document.addEventListener("DOMContentLoaded", () => {
  loadDOMElements();
  createMap("map", onMapChange);
  addEventListeners();
});
