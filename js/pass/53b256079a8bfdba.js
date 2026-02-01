var obj = {};
var data = "data";
Object.prototype.set = function (value) {
  data = value;
};
Object.defineProperty(obj, "property", JSON);
obj.property = "overrideData";