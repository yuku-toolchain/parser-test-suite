var A = class {};
var C = class extends A {
  #x = (0, eval)('() => super["x"];');
};