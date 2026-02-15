var obj = {};
var data = "data";
var proto = {
  set: function (value) {
    data = value;
  }
};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(obj, "property", child);
obj.property = "overrideData";