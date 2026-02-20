var obj = {};
var data = "data";
var errObj = new Error();
errObj.set = function (value) {
  data = value;
};
Object.defineProperty(obj, "property", errObj);
obj.property = "overrideData";