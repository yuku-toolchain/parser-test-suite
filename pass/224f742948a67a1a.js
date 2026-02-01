var args;
var Ctor = function () {
  args = arguments;
};
var a = [];
a.constructor = {};
a.constructor[Symbol.species] = Ctor;
a.splice(0, -0);