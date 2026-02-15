var initCount = 0;
function thrower() {}
var C = class {
  async *method({a, b = thrower(), c = ++initCount}) {}
};
var method = C.prototype.method;