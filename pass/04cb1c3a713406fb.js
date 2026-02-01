var callCount = 0;
var f;
f = ([_, x]) => {
  callCount = callCount + 1;
};
f([]);