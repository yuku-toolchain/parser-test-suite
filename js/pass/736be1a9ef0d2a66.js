var obj = {};
var func = function (a, b) {
  return a + b;
};
func.value = "Function";
Object.defineProperties(obj, {
  property: func
});