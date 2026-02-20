var obj = {};
var strObj = new String();
var data = "data";
strObj.set = function (value) {
  data = value;
};
Object.defineProperty(obj, "property", strObj);
obj.property = "overrideData";