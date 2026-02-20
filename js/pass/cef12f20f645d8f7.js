function thrower() {}
var C = class {
  async *method({[thrower()]: x}) {}
};
var method = C.prototype.method;