delete Array.prototype[Symbol.iterator];
var C = class {
  static async *method([x, y, z]) {}
};
var method = C.method;