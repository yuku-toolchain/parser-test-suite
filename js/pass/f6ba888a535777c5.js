var initCount = 0;
function thrower() {}
class C {
  async *method({a, b = thrower(), c = ++initCount} = {}) {}
}
var method = C.prototype.method;