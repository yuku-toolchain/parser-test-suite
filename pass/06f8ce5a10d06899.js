var x = 0;
var callCount = 0;
var obj = {
  method(x, y = x, z = y) {
    callCount = callCount + 1;
  }
};
obj.method(3);
var ref = obj.method;