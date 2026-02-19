var proto = {};
Object.defineProperty(proto, "value", {
  set: function () {}
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var descObj = new ConstructFun();
var newObj = Object.create({}, {
  prop: descObj
});