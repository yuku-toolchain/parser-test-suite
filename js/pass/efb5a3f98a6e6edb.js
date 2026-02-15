var obj = {};
var data = "data";
JSON.set = function (value) {
  data = value;
};
Object.defineProperty(obj, "property", JSON);
obj.property = "overrideData";