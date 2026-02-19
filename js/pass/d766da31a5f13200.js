var initCount = 0;
function thrower() {}
class C {
  static method({a, b = thrower(), c = ++initCount} = {}) {}
}