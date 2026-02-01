var callCount = 0;
class C {
  *method({fn = function () {}, xFn = function x() {}}) {
    callCount = callCount + 1;
  }
}
new C().method({}).next();