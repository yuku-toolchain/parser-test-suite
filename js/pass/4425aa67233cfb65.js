var speciesConstructor = {};
var arrayBuffer = new ArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;
function callSlice() {
  arrayBuffer.slice();
}
speciesConstructor[Symbol.species] = {};
speciesConstructor[Symbol.species] = Function.prototype;