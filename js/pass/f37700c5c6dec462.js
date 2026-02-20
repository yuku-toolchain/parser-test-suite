var obj = {};
var data = "data";
Math.set = function (value) {
  data = value;
};
Object.defineProperty(obj, "property", Math);
obj.property = "overrideData";