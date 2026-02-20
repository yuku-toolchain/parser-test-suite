var callCount = 0;
var obj = {
  *method([...{length}]) {
    callCount = callCount + 1;
  }
};
obj.method([1, 2, 3]).next();