var callCount = 0;
var obj = {
  *method(a, b = 39) {
    callCount = callCount + 1;
  }
};
obj.method(42, undefined, 1).next();
var ref = obj.method;