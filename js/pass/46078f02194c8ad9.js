var C = class {
  async *method({x = unresolvableReference}) {}
};
var method = C.prototype.method;