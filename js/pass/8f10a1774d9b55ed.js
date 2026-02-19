var speciesConstructor = {};
var arrayBuffer = new SharedArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;
function callSlice() {
  arrayBuffer.slice();
}
speciesConstructor[Symbol.species] = {};
speciesConstructor[Symbol.species] = Function.prototype;