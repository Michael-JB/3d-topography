For convenience, simplicity, and to not to depend on a CDN, this directory contains minified
versions of the project dependencies.

Note: This is not an optimal solution as a large amount of unused code is sent to the client
(especially in the case of `openLayers/openLayers.min.js`). Ideally the dependencies would be
tree-shaken and bundled.
