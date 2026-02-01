var callCount = 0;
var f;
f = function* ([x = 23]) {
  callCount = callCount + 1;
};
f([]).next();