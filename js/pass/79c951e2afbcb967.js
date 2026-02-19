var callCount = 0;
var f;
f = function* ([_, x]) {
  callCount = callCount + 1;
};
f([]).next();