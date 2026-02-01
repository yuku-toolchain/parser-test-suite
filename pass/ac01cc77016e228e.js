var initCount = 0;
function thrower() {}
var obj = {
  async *method({a, b = thrower(), c = ++initCount}) {}
};