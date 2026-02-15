function thrower() {}
var C = class {
  static async *method({x: y = thrower()} = {}) {}
};
var method = C.method;