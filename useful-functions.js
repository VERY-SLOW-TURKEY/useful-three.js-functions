// These functions will only work if the mesh has a box geometry

function distance(mesh1, mesh2) {
var xDis = mesh1.position.x - mesh2.position.x;
var yDis = mesh1.position.z - mesh2.position.z;
var zDis = mesh1.position.y - mesh2.position.y;
var distances = Math.sqrt(xDis * xDis + yDis * yDis);
distances = Math.sqrt(distances * distances + zDis * zDis);
return distances;
}

function collide(mesh, mesh2) {
var meshXRight = mesh.position.x + mesh.geometry.parameters.width / 2;
var meshXLeft = mesh.position.x - mesh.geometry.parameters.width / 2;
var meshYUp = mesh.position.y + mesh.geometry.parameters.height / 2;
var meshYDown = mesh.position.y - mesh.geometry.parameters.height / 2;
var meshZRight = mesh.position.z + mesh.geometry.parameters.depth / 2;
var meshZLeft = mesh.position.z - mesh.geometry.parameters.depth / 2;

var mesh2XRight = mesh2.position.x + mesh2.geometry.parameters.width / 2;
var mesh2XLeft = mesh2.position.x - mesh2.geometry.parameters.width / 2;
var mesh2YUp = mesh2.position.y + mesh2.geometry.parameters.height / 2;
var mesh2YDown = mesh2.position.y - mesh2.geometry.parameters.height / 2;
var mesh2ZRight = mesh2.position.z + mesh2.geometry.parameters.depth / 2;
var mesh2ZLeft = mesh2.position.z - mesh2.geometry.parameters.depth / 2;
if (meshXRight >= mesh2XLeft && meshXLeft <= mesh2XRight && meshYUp >= mesh2YDown && meshYDown <= mesh2YUp && meshZRight >= mesh2ZLeft && meshZLeft <= mesh2ZRight) {
return true;
} else {
return false;
}
}

// functions that return parameters for the sides of a mesh

function right(mesh) {
var rightMesh = {
position:{x: mesh.position.x + mesh.geometry.parameters.width / 2 + 0.1, y: mesh.position.y, z: mesh.position.z},
geometry:{parameters:{width: 0, height: mesh.geometry.parameters.height / 2, depth: mesh.geometry.parameters.depth / 2}}
}
return rightMesh;
}
function left(mesh) {
var leftMesh = {
position:{x: mesh.position.x - mesh.geometry.parameters.width / 2 - 0.1, y: mesh.position.y, z: mesh.position.z},
geometry:{parameters:{width: 0, height: mesh.geometry.parameters.height / 2, depth: mesh.geometry.parameters.depth / 2}}
}
return leftMesh;
}
function front(mesh) {
var frontMesh = {
position:{x: mesh.position.x, y: mesh.position.y, z: mesh.position.z + mesh.geometry.parameters.depth / 2 + 0.1},
geometry:{parameters:{width: mesh.geometry.parameters.width / 2, height: mesh.geometry.parameters.height / 2, depth: 0}}
}
return frontMesh;
}
function back(mesh) {
var backMesh = {
position:{x: mesh.position.x, y: mesh.position.y, z: mesh.position.z - mesh.geometry.parameters.depth / 2 - 0.1},
geometry:{parameters:{width: mesh.geometry.parameters.width / 2, height: mesh.geometry.parameters.height / 2, depth: 0}}
}
return backMesh;
}
function top(mesh) {
var topMesh = {
position:{x: mesh.position.x, y: mesh.position.y + mesh.geometry.parameters.height / 2 + 0.1, z: mesh.position.z},
geometry:{parameters:{width: mesh.geometry.parameters.width / 2, height: 0, depth: mesh.geometry.parameters.depth / 2}}
}
return topMesh;
}
function bottom(mesh) {
var bottomMesh = {
position:{x: mesh.position.x, y: mesh.position.y - mesh.geometry.parameters.height / 2 - 0.1, z: mesh.position.z},
geometry:{parameters:{width: mesh.geometry.parameters.width / 2, height: 0, depth: mesh.geometry.parameters.depth / 2}}
}
return bottomMesh;
}

// moves a mesh forward in the direction it is pointing both horizontally and vertically

function forward(mesh, amount) {
const xChange = Math.cos(mesh.rotation.y) * amount;
const zChange = Math.sin(mesh.rotation.y) * amount;
const yChange = Math.sin(mesh.rotation.x) * amount;
mesh.position.x += xChange;
mesh.position.z += zChange;
mesh.position.y += yChange;
}
