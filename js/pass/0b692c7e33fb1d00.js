var proto = {};
Object.defineProperty(proto, "configurable", {
  get: function () {
    return true;
  }
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var descObj = new ConstructFun();
Object.defineProperty(descObj, "configurable", {
  get: function () {
    return false;
  }
});
var newObj = Object.create({}, {
  prop: descObj
});