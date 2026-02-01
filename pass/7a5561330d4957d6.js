var initCount = 0;
function thrower() {}
var obj = {
  *method({a, b = thrower(), c = ++initCount}) {}
};