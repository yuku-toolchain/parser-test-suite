var speciesConstructor = {};
speciesConstructor[Symbol.species] = undefined;
var arrayBuffer = new ArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;
var result = arrayBuffer.slice();