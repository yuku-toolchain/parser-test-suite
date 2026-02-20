var callCount = 0;
var f;
f = function (x = arguments[2], y = arguments[3], z) {
  callCount = callCount + 1;
};
f(undefined, undefined, 'third', 'fourth');