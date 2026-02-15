delete Array.prototype[Symbol.iterator];
var C = class {
  async *method([x, y, z]) {}
};
var method = C.prototype.method;