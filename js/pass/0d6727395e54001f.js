var proto = {};
Object.defineProperty(proto, "writable", {
  get: function () {
    return true;
  }
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var descObj = new ConstructFun();
Object.defineProperty(descObj, "writable", {
  set: function () {}
});
var newObj = Object.create({}, {
  prop: descObj
});