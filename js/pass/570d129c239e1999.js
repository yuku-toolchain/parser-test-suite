var obj = {};
var data = "data";
Boolean.prototype.set = function (value) {
  data = value;
};
var boolObj = new Boolean(true);
Object.defineProperty(obj, "property", boolObj);
obj.property = "overrideData";