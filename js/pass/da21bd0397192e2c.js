var obj = {};
Function.prototype.value = "Function";
var funObj = function (a, b) {
  return a + b;
};
Object.defineProperty(obj, "property", funObj);