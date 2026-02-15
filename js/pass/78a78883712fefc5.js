var x = 0;
var callCount = 0;
var f;
f = function (x = y, y) {
  callCount = callCount + 1;
};