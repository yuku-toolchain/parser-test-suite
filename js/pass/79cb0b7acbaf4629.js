var C = class {
  static async *method({x = unresolvableReference} = {}) {}
};
var method = C.method;