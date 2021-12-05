import { computeTriangleNormal } from "./process.js";

const stringifyVector3 = (v) =>
  `${v.x.toExponential()} ${v.y.toExponential()} ${v.z.toExponential()}`;

const createSTL = (triangles) => `solid surface
${triangles
  .map(
    (v) => `facet normal ${stringifyVector3(
      computeTriangleNormal(v.v1, v.v2, v.v3)
    )}
    outer loop
        vertex ${stringifyVector3(v.v1)}
        vertex ${stringifyVector3(v.v2)}
        vertex ${stringifyVector3(v.v3)}
    endloop
endfacet`
  )
  .join("\n")}
endsolid surface`;

const downloadFile = (payload, fileName) => {
  const url = window.URL.createObjectURL(payload);
  const downloadLink = document.createElement("a");
  downloadLink.style.display = "none";
  downloadLink.setAttribute("aria-hidden", "true");
  downloadLink.setAttribute("href", url);
  downloadLink.setAttribute("download", fileName);
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

export const exportAsSTL = (triangles) => {
  const payload = new Blob([createSTL(triangles)], { type: "model/stl" });
  downloadFile(payload, "output.stl");
};
