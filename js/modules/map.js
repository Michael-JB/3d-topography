let vectorSource;

export const getBBox = () => {
  const features = vectorSource.getFeatures();
  let bbox;

  if (features.length > 0) {
    const coords = features[0]
      .getGeometry()
      .getCoordinates()
      .flat()
      .slice(0, 4)
      .map((coord) => ol.proj.toLonLat(coord));
    const topLeft = coords[0],
      bottomRight = coords[2];
    bbox = {
      west: topLeft[0],
      south: topLeft[1],
      east: bottomRight[0],
      north: bottomRight[1],
    };
  }
  return bbox;
};

export const computeBBoxSurfaceArea = (bbox) => {
  const width = bbox.east - bbox.west;
  const height = bbox.north - bbox.south;
  return width * height;
};

export const createMap = (elementId, onMapChange) => {
  vectorSource = new ol.source.Vector({ wrapX: false });
  const map = new ol.Map({
    target: elementId,
    layers: [
      new ol.layer.Tile({ source: new ol.source.OSM() }),
      new ol.layer.Vector({ source: vectorSource }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([0, 52]),
      zoom: 4,
    }),
  });

  map.addInteraction(
    new ol.interaction.Draw({
      source: vectorSource,
      type: "Circle",
      geometryFunction: ol.interaction.Draw.createBox(),
    })
  );

  // Register event handler to allow only a single feature
  vectorSource.on("addfeature", (e) => {
    if (vectorSource.getFeatures().length > 1) {
      vectorSource.clear();
      vectorSource.addFeature(e.feature);
      return;
    }
    onMapChange(getBBox());
  });
};
