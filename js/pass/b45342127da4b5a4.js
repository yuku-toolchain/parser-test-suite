var callCount = 0;
var obj = {
  method([...x] = [1]) {
    callCount = callCount + 1;
  }
};
obj.method();