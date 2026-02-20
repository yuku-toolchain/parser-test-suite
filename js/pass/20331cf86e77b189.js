delete Array.prototype[Symbol.iterator];
var C = class {
  async *method([x, y, z] = [1, 2, 3]) {}
};
var method = C.prototype.method;