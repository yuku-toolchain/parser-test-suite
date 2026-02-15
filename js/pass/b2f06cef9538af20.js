class C {
  async *method({x = unresolvableReference} = {}) {}
}
var method = C.prototype.method;