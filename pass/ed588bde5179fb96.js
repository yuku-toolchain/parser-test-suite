var obj = {};
var argObj = (function () {
  return arguments;
})();
argObj.get = function () {
  return "argumentGetProperty";
};
Object.defineProperty(obj, "property", argObj);