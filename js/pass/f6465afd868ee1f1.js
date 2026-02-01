var speciesConstructor = {};
speciesConstructor[Symbol.species] = null;
var arrayBuffer = new SharedArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;
var result = arrayBuffer.slice();