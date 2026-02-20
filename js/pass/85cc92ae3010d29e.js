var initCount = 0;
function thrower() {}
var C = class {
  static method({a, b = thrower(), c = ++initCount}) {}
};