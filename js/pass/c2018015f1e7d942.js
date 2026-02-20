var executed = false;
var A = class {};
var C = class extends A {
  #x = (0, eval)('executed = true; super()["x"];');
};