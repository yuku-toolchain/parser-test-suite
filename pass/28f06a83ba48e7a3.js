function thrower() {}
var C = class {
  static async *method({x = thrower()} = {}) {}
};
var method = C.method;