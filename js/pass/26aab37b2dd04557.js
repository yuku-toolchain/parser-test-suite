var calls = [];
var speciesConstructor = {};
speciesConstructor[Symbol.species] = function (length) {
  calls.push("Symbol.species(" + length + ")");
  return arrayBuffer.sliceToImmutable();
};
var arrayBuffer = new ArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;
calls = [];