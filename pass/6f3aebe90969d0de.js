function thrower() {}
var C = class {
  async *method({x = thrower()} = {}) {}
};
var method = C.prototype.method;