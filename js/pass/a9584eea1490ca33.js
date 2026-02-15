var iter = {};
iter[Symbol.iterator] = function () {};
var C = class {
  *method([x] = iter) {}
};
var c = new C();