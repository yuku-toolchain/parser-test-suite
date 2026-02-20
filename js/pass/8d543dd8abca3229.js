var callCount = 0;
var f;
f = function* ({x: y}) {
  callCount = callCount + 1;
};
f({
  x: 23
}).next();