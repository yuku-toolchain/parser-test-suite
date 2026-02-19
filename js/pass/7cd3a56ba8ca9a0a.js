var x = 0;
var callCount = 0;
var obj = {
  method(x = x) {
    callCount = callCount + 1;
  }
};