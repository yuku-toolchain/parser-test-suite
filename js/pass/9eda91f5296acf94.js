var callCount = 0;
var f;
f = function* ([...{length}]) {
  callCount = callCount + 1;
};
f([1, 2, 3]).next();