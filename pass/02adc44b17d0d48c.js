var speciesConstructor = {};
speciesConstructor[Symbol.species] = function (length) {
  return arrayBuffer;
};
var arrayBuffer = new ArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;