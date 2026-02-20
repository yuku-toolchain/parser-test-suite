var obj = {};
var data = "data";
Error.prototype.set = function (value) {
  data = value;
};
var errObj = new Error();
Object.defineProperty(obj, "property", errObj);
obj.property = "overrideData";