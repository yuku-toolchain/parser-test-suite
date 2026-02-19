var values = [2, 1, 3];
var callCount = 0;
var obj = {
  *method([[...x] = values] = []) {
    callCount = callCount + 1;
  }
};
obj.method().next();