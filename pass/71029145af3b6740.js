var obj = {};
var data = "data";
RegExp.prototype.set = function (value) {
  data = value;
};
var regObj = new RegExp();
Object.defineProperty(obj, "property", regObj);
obj.property = "overrideData";