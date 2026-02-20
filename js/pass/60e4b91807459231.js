var callCount = 0;
var f;
f = function (x, _ = 0) {
  arguments[0] = 1;
  x = 2;
  callCount = callCount + 1;
};
f();