var iter = {};
iter[Symbol.iterator] = function () {};
var C = class {
  static *method([x]) {}
};