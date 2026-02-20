var obj = {};
var data = "data";
var argObj = (function () {
  return arguments;
})();
argObj.set = function (value) {
  data = value;
};
Object.defineProperty(obj, "property", argObj);
obj.property = "overrideData";