var obj = {};
var data = "data";
var arrObj = [];
arrObj.set = function (value) {
  data = value;
};
Object.defineProperty(obj, "property", arrObj);
obj.property = "overrideData";