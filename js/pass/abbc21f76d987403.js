var proto = {};
Object.defineProperty(proto, "foo", {
  value: 12,
  configurable: true
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var obj = new ConstructFun();
Object.defineProperty(obj, "foo", {
  value: 11,
  configurable: false
});