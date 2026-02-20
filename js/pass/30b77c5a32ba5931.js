var callCount = 0;
var f;
f = function ([...x] = [1, 2]) {
  callCount = callCount + 1;
};
f();