var obj = {};
var argObj = (function () {
  return arguments;
})();
argObj.value = "arguments";
Object.defineProperty(obj, "property", argObj);