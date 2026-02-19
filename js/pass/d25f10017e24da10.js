var callCount = 0;
var C = class {
  *method([fn = function () {}, xFn = function x() {}]) {
    callCount = callCount + 1;
  }
};
new C().method([]).next();