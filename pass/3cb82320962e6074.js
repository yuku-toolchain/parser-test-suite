var obj = {
  property: 120
};
var proto = {};
Object.defineProperty(proto, "value", {
  set: function () {}
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(obj, "property", child);