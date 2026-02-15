var obj = {};
var data = "data";
Function.prototype.set = function (value) {
  data = value;
};
var funObj = function () {};
Object.defineProperty(obj, "property", funObj);
obj.property = "overrideData";