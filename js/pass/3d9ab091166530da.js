delete Array.prototype[Symbol.iterator];
var C = class {
  *method([x, y, z]) {}
};
var c = new C();