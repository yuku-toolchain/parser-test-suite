var initCount = 0;
function thrower() {}
class C {
  *method({a, b = thrower(), c = ++initCount} = {}) {}
}
var c = new C();