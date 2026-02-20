var a = [];
var result;
a.constructor = {};
a.constructor[Symbol.species] = undefined;
result = a.concat();