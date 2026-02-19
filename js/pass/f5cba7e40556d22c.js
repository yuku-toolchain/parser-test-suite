function thrower() {}
var C = class {
  static *method({x = thrower()}) {}
};