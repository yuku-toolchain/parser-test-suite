var arr = [2, 3];
var callCount = 0;
var obj = {
  method() {
    callCount = callCount + 1;
  }
};
obj.method(42, ...[1], ...arr);
var ref = obj.method;