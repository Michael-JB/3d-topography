import { computeTriangleNormal } from "./process.js";

const triangleColour = "rgb(0,120,255)";
const vertexColour = "rgb(255,120,0)";
const wireframeColour = "white";
const lightColour = "white";

const positionAndOrientGeometry = (geometry) => {
  geometry.center();
  geometry.rotateX(-Math.PI / 2);
  geometry.rotateY(Math.PI);
};

const trianglesToThreeGeometry = (triangles) => {
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array(
    triangles.flatMap((t) => [
      t.v1.x,
      t.v1.y,
      t.v1.z,
      t.v2.x,
      t.v2.y,
      t.v2.z,
      t.v3.x,
      t.v3.y,
      t.v3.z,
    ])
  );
  const normals = new Float32Array(
    triangles
      .map((t) => computeTriangleNormal(t.v1, t.v2, t.v3))
      .flatMap((n) => new Array(3).fill([n.x, n.y, n.z]).flat())
  );
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  geometry.setAttribute("normal", new THREE.BufferAttribute(normals, 3));
  positionAndOrientGeometry(geometry);
  return geometry;
};

const verticesToThreeGeometry = (vertices) => {
  const geometry = new THREE.BufferGeometry();
  const bVertices = new Float32Array(vertices.flatMap((v) => [v.x, v.y, v.z]));
  geometry.setAttribute("position", new THREE.BufferAttribute(bVertices, 3));
  positionAndOrientGeometry(geometry);
  return geometry;
};

const render = (element, camera, content, onAnimationTick = () => {}) => {
  const rendererOptions = { antialias: true, alpha: true };
  const renderer = new THREE.WebGLRenderer(rendererOptions);
  renderer.setSize(element.clientWidth, element.clientWidth);
  element.replaceChildren(renderer.domElement);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.rotateSpeed = 0.5;
  controls.dampingFactor = 0.1;
  controls.enableZoom = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.4;

  const scene = new THREE.Scene();
  scene.add(...content);

  window.addEventListener("resize", () =>
    renderer.setSize(element.clientWidth, element.clientWidth)
  );
  const animateScene = () => {
    requestAnimationFrame(animateScene);
    onAnimationTick();
    controls.update();
    renderer.render(scene, camera);
  };
  animateScene();
};

const maxAxes = (boundingBoxMax) =>
  Math.max(boundingBoxMax.x, boundingBoxMax.y, boundingBoxMax.z);

export const renderVertices = (vertices, element) => {
  const geometry = verticesToThreeGeometry(vertices);
  const material = new THREE.PointsMaterial({ color: vertexColour });
  const points = new THREE.Points(geometry, material);

  const camera = new THREE.PerspectiveCamera(45, 1, 1, Number.MAX_SAFE_INTEGER);
  camera.position.z = maxAxes(geometry.boundingBox.max) * 3;
  camera.position.y = camera.position.z / 3;

  render(element, camera, [points]);
};

export const renderTriangles = (triangles, element, showWireframe = false) => {
  const sceneContent = [];
  const geometry = trianglesToThreeGeometry(triangles);
  const material = new THREE.MeshStandardMaterial({ color: triangleColour });
  const mesh = new THREE.Mesh(geometry, material);
  sceneContent.push(mesh);

  if (showWireframe) {
    const wireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(mesh.geometry, 0),
      new THREE.LineBasicMaterial({ color: wireframeColour })
    );
    sceneContent.push(wireframe);
  }

  const camera = new THREE.PerspectiveCamera(45, 1, 1, Number.MAX_SAFE_INTEGER);
  camera.position.z = maxAxes(geometry.boundingBox.max) * 3;
  camera.position.y = camera.position.z / 2;

  const light = new THREE.DirectionalLight(lightColour, 1);
  light.position.set(...camera.position);
  light.target.position.set(...mesh.position);
  sceneContent.push(light, light.target);

  render(element, camera, sceneContent, () =>
    light.position.set(...camera.position)
  );
};
