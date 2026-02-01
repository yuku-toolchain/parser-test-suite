function thrower() {}
var C = class {
  static method({x: y = thrower()}) {}
};