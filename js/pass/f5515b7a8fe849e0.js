var proto = {};
Object.defineProperty(proto, "property", {
  get: function () {
    return 11;
  },
  configurable: false
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var obj = new ConstructFun();
Object.defineProperty(obj, "property", {
  get: function () {
    return 12;
  },
  configurable: true
});