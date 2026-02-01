var speciesConstructor = {};
speciesConstructor[Symbol.species] = function (length) {
  return new ArrayBuffer(4);
};
var arrayBuffer = new ArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;