var obj = {};
Object.prototype.value = "arguments";
var argObj = (function () {
  return arguments;
})();
Object.defineProperty(obj, "property", argObj);