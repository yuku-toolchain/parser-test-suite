var callCount = 0;
var obj = {
  method(a, b) {
    callCount = callCount + 1;
  }
};
obj.method(42, 39, 1);
var ref = obj.method;