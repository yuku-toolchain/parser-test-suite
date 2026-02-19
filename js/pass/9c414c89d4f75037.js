var callCount = 0;
var f;
f = function* ([x]) {
  callCount = callCount + 1;
};
f([]).next();