var obj = {};
var data = "data";
var funObj = function () {};
funObj.set = function (value) {
  data = value;
};
Object.defineProperty(obj, "property", funObj);
obj.property = "overrideData";