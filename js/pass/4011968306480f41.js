function thrower() {}
var C = class {
  method({x = thrower()}) {}
};
var c = new C();