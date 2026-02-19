var speciesConstructor = {};
speciesConstructor[Symbol.species] = function (length) {
  return new SharedArrayBuffer(10);
};
var arrayBuffer = new SharedArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;
var result = arrayBuffer.slice();