var obj = {};
Object.prototype.get = function () {
  return "argumentGetProperty";
};
var argObj = (function () {
  return arguments;
})();
Object.defineProperty(obj, "property", argObj);