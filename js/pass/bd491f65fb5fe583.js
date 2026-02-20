var obj = {};
var data = "data";
var numObj = new Number(-2);
numObj.set = function (value) {
  data = value;
};
Object.defineProperty(obj, "property", numObj);
obj.property = "overrideData";