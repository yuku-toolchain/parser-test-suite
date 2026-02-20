var callCount = 0;
var obj = {
  *method() {
    callCount = callCount + 1;
  }
};
obj.method(42, undefined).next();
var ref = obj.method;