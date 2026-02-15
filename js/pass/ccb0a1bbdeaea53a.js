var initCount = 0;
function thrower() {}
var C = class {
  *method({a, b = thrower(), c = ++initCount} = {}) {}
};
var c = new C();