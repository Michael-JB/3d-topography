export const metresToMillimetres = (metres) => metres * 1000;

export const arrayToVertices = (data, width, resolution, scaleVector) =>
  [...Array(Math.ceil(data.length / width))]
    .map((_, i) => data.slice(i * width, (i + 1) * width))
    .flatMap((v) => v.reverse())
    .map((v, i) => {
      const x = (i % width) * resolution * scaleVector.x;
      const y = Math.floor(i / width) * resolution * scaleVector.y;
      const z = metresToMillimetres(v) * scaleVector.z;
      return { x, y, z };
    });

export const computeTriangleNormal = (p1, p2, p3) => {
  const A = { x: p2.x - p1.x, y: p2.y - p1.y, z: p2.z - p1.z };
  const B = { x: p3.x - p1.x, y: p3.y - p1.y, z: p3.z - p1.z };

  const Nx = A.y * B.z - A.z * B.y;
  const Ny = A.z * B.x - A.x * B.z;
  const Nz = A.x * B.y - A.y * B.x;
  return { x: Nx, y: Ny, z: Nz };
};

const triangulateQuad = (v1, v2, v3, v4) => [
  { v1, v2, v3 },
  { v1: v3, v2, v3: v4 },
];

const triangulate = (vertices, width, baseHeight) => {
  const triangles = [];

  let maxX = Number.NEGATIVE_INFINITY,
    maxY = Number.NEGATIVE_INFINITY,
    maxZ = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < vertices.length; i++) {
    maxX = Math.max(maxX, vertices[i].x);
    maxY = Math.max(maxY, vertices[i].y);
    maxZ = Math.max(maxZ, vertices[i].z);

    const lastColumn = i % width === width - 1;
    const firstColumn = i % width === 0;
    const lastRow = i >= vertices.length - width;
    const firstRow = i < width;

    // Column ends
    if (!lastRow && (firstColumn || lastColumn)) {
      const v0 = vertices[i];
      const v1 = vertices[i + width];
      const v2 = { ...vertices[i], z: -baseHeight };
      const v3 = {
        ...vertices[i],
        y: vertices[i + width].y,
        z: -baseHeight,
      };
      triangles.push(
        ...(lastColumn
          ? triangulateQuad(v0, v2, v1, v3)
          : triangulateQuad(v0, v1, v2, v3))
      );
    }

    // Row ends
    if (!lastColumn && (firstRow || lastRow)) {
      const v0 = vertices[i];
      const v1 = vertices[i + 1];
      const v2 = { ...vertices[i], z: -baseHeight };
      const v3 = {
        ...vertices[i],
        x: vertices[i + 1].x,
        z: -baseHeight,
      };
      triangles.push(
        ...(lastRow
          ? triangulateQuad(v0, v1, v2, v3)
          : triangulateQuad(v0, v2, v1, v3))
      );
    }

    if (lastRow || lastColumn) continue;

    // Surface triangles
    triangles.push(
      ...triangulateQuad(
        vertices[i],
        vertices[i + 1],
        vertices[i + width],
        vertices[i + width + 1]
      )
    );
  }

  // Base rectangle
  triangles.push(
    ...triangulateQuad(
      { ...vertices[0], z: -baseHeight },
      { ...vertices[vertices.length - width], z: -baseHeight },
      { ...vertices[width - 1], z: -baseHeight },
      { ...vertices[vertices.length - 1], z: -baseHeight }
    )
  );

  const dimensions = {
    length: maxX,
    width: maxY,
    height: maxZ + baseHeight,
  };

  return { triangles, dimensions };
};

export const DEMFromTIFF = async (tiff) => {
  const image = await tiff.getImage();
  const data = await image.readRasters();
  return { data: Array.from(data[0]), width: data.width };
};

export const triangulateDEM = (
  dem,
  baseHeightMetres,
  resolutionMetres,
  scaleVector
) => {
  const vertices = arrayToVertices(
    dem.data,
    dem.width,
    metresToMillimetres(resolutionMetres),
    scaleVector
  );
  const triangulation = triangulate(
    vertices,
    dem.width,
    metresToMillimetres(baseHeightMetres) * scaleVector.z
  );
  return triangulation;
};
