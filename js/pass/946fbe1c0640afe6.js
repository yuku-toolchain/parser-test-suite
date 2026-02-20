class C {
  static async *method({x: y = unresolvableReference}) {}
}
var method = C.method;