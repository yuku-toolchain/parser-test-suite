function thrower() {}
var C = class {
  async *method({x: y = thrower()}) {}
};
var method = C.prototype.method;