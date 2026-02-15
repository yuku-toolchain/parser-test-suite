var Ctor = function () {};
var callCount = 0;
var cb = function () {
  callCount += 1;
};
var a = [];
a.constructor = {};
a.constructor[Symbol.species] = Ctor;