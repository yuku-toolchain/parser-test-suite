var obj = {};
var data = "data";
var regObj = new RegExp();
regObj.set = function (value) {
  data = value;
};
Object.defineProperty(obj, "property", regObj);
obj.property = "overrideData";