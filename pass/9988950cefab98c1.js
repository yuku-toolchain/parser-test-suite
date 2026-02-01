var obj = {};
String.prototype.set = function (value) {
  data = value;
};
var strObj = new String();
var data = "data";
Object.defineProperty(obj, "property", strObj);
obj.property = "overrideData";