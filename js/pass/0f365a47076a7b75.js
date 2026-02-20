var speciesConstructor = {};
speciesConstructor[Symbol.species] = function (length) {
  return arrayBuffer;
};
var arrayBuffer = new SharedArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;