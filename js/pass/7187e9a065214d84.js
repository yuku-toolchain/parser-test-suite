var callCount = 0;
var f;
f = function ({x: [y]} = {
  x: [45]
}) {
  callCount = callCount + 1;
};
f();