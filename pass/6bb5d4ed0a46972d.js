var callCount = 0;
var obj = {
  *method([fn = function () {}, xFn = function x() {}]) {
    callCount = callCount + 1;
  }
};
obj.method([]).next();