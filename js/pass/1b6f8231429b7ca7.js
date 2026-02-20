var speciesConstructor = {};
speciesConstructor[Symbol.species] = function (length) {
  return new ArrayBuffer(10);
};
var arrayBuffer = new ArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;
var result = arrayBuffer.slice();