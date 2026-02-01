var callCount = 0;
var obj = {
  *method([...[x, y, z]] = [3, 4, 5]) {
    callCount = callCount + 1;
  }
};
obj.method().next();