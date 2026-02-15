var callCount = 0;
var obj = {
  *method([_, x] = []) {
    callCount = callCount + 1;
  }
};
obj.method().next();