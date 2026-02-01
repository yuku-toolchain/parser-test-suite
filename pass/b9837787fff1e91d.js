var obj = {};
var funObj = function (a, b) {
  return a + b;
};
funObj.value = "Function";
Object.defineProperty(obj, "property", funObj);