var obj = {};
var data = "data";
Array.prototype.set = function (value) {
  data = value;
};
var arrObj = [];
Object.defineProperty(obj, "property", arrObj);
obj.property = "overrideData";