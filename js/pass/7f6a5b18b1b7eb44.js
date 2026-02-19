var Ctor = function () {};
var a = [];
a.constructor = {};
a.constructor[Symbol.species] = Ctor;