var obj = {};
var func = function (a, b) {
  return a + b;
};
func.get = function () {
  return "Function";
};
Object.defineProperties(obj, {
  property: func
});