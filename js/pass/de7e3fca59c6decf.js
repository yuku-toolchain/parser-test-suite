var obj = {};
var data = "data";
Number.prototype.set = function (value) {
  data = value;
};
var numObj = new Number(-2);
Object.defineProperty(obj, "property", numObj);
obj.property = "overrideData";