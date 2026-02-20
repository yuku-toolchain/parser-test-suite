var callCount = 0;
var obj = {
  method(a) {
    callCount = callCount + 1;
  }
};
obj.method(42, 39);
var ref = obj.method;