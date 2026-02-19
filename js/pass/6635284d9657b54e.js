var obj = {};
var proto = {
  configurable: false
};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(obj, "property", child);