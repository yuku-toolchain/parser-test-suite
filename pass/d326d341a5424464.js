var callCount = 0;
var f;
f = function ({x: y = 33}) {
  callCount = callCount + 1;
};
f({});