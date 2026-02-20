var C = class {
  method({x: y = unresolvableReference}) {}
};
var c = new C();