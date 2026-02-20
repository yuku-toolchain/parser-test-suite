var callCount = 0;
var obj = {
  *method() {
    callCount = callCount + 1;
  }
};
obj.method(42).next();
var ref = obj.method;