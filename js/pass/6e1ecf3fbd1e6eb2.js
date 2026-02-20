var callCount = 0;
var obj = {
  method([x = 23] = [undefined]) {
    callCount = callCount + 1;
  }
};
obj.method();