var x = 0;
var callCount = 0;
var f;
f = function* (x = x) {
  callCount = callCount + 1;
};