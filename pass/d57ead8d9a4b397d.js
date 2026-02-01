var proto = {};
Object.defineProperty(proto, "foo", {
  value: 11,
  configurable: false
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var obj = new ConstructFun();
Object.defineProperty(obj, "foo", {
  configurable: true
});