var callCount = 0;
var f;
f = function ([x = 23] = [undefined]) {
  callCount = callCount + 1;
};
f();