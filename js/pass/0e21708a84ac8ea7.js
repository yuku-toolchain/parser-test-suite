var callCount = 0;
class C {
  static method([gen = function* () {}, xGen = function* x() {}] = []) {
    callCount = callCount + 1;
  }
}
C.method();