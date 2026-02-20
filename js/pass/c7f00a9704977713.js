var speciesConstructor = {};
var arrayBuffer = new SharedArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;
function callSlice() {
  arrayBuffer.slice();
}
speciesConstructor[Symbol.species] = true;
speciesConstructor[Symbol.species] = "";
speciesConstructor[Symbol.species] = Symbol();
speciesConstructor[Symbol.species] = 1;