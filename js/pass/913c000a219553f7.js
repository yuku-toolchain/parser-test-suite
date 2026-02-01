var initCount = 0;
function thrower() {}
var C = class {
  static async *method({a, b = thrower(), c = ++initCount}) {}
};
var method = C.method;