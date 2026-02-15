var callCount = 0;
var obj = {
  method([x]) {
    callCount = callCount + 1;
  }
};
obj.method([]);