var obj = {};
var data = "data";
var boolObj = new Boolean(true);
boolObj.set = function (value) {
  data = value;
};
Object.defineProperty(obj, "property", boolObj);
obj.property = "overrideData";