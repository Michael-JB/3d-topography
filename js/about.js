import {
  arrayToVertices,
  DEMFromTIFF,
  metresToMillimetres,
  triangulateDEM,
} from "./modules/process.js";
import { renderTriangles, renderVertices } from "./modules/render.js";

const renderModels = async () => {
  const everestFileName = "bin/uluru.tif";
  const response = await fetch(everestFileName);
  if (response.ok) {
    const arrayBuffer = await response.arrayBuffer();
    const tiff = await GeoTIFF.fromArrayBuffer(arrayBuffer);
    const dem = await DEMFromTIFF(tiff);
    const scaleVector = { x: 0.00001, y: 0.00001, z: 0.00001 };
    const resolution = 90;
    const vertices = arrayToVertices(
      dem.data,
      dem.width,
      metresToMillimetres(resolution),
      scaleVector
    );
    const { triangles } = triangulateDEM(dem, 0, resolution, scaleVector);
    renderTriangles(
      triangles,
      document.getElementById("triangulated-model"),
      true
    );
    renderVertices(vertices, document.getElementById("point-cloud-model"));
  } else {
    console.error(`Failed to fetch ${everestFileName}`);
  }
};

document.addEventListener("DOMContentLoaded", () => renderModels());
