var iter = {};
iter[Symbol.iterator] = function () {};
var C = class {
  method([x]) {}
};
var c = new C();