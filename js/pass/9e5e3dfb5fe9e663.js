var proto = {};
Object.defineProperty(proto, "foo", {
  set: function () {},
  configurable: false
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var obj = new ConstructFun();
Object.defineProperty(obj, "foo", {
  configurable: true
});