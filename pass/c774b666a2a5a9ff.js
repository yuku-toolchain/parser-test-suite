var callCount = 0;
var C = class {
  static *method([gen = function* () {}, xGen = function* x() {}]) {
    callCount = callCount + 1;
  }
};
C.method([]).next();