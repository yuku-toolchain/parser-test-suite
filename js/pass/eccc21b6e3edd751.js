var callCount = 0;
var obj = {
  *method([gen = function* () {}, xGen = function* x() {}] = []) {
    callCount = callCount + 1;
  }
};
obj.method().next();