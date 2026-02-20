var speciesConstructor = {};
speciesConstructor[Symbol.species] = function (length) {
  return {};
};
var arrayBuffer = new SharedArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;