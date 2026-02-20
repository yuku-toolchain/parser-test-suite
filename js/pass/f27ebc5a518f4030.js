var callCount = 0;
var obj = {
  method(x, _ = 0) {
    arguments[0] = 1;
    x = 2;
    callCount = callCount + 1;
  }
};
obj.method();