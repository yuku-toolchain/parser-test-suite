var initCount = 0;
function thrower() {}
class C {
  static async *method({a, b = thrower(), c = ++initCount}) {}
}
var method = C.method;