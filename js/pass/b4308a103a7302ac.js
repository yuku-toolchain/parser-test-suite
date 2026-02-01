function thrower() {}
var C = class {
  method({x: y = thrower()} = {}) {}
};
var c = new C();