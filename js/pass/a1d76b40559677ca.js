var callCount = 0;
var obj = {
  method([...[x, y, z]]) {
    callCount = callCount + 1;
  }
};
obj.method([3, 4, 5]);