var callCount = 0;
var f;
f = function ([...x] = [1]) {
  callCount = callCount + 1;
};
f();