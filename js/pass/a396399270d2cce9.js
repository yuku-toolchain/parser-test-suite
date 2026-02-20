var speciesConstructor = {};
speciesConstructor[Symbol.species] = function (length) {
  return new SharedArrayBuffer(4);
};
var arrayBuffer = new SharedArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;