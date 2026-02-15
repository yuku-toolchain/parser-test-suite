var callCount = 0;
class C {
  *method({gen = function* () {}, xGen = function* x() {}}) {
    callCount = callCount + 1;
  }
}
new C().method({}).next();