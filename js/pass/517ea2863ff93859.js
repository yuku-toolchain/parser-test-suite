var obj = {};
var data = "data";
Object.prototype.set = function (value) {
  data = value;
};
var argObj = (function () {
  return arguments;
})();
Object.defineProperty(obj, "property", argObj);
obj.property = "overrideData";