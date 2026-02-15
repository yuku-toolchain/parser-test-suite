var proto = {};
Object.defineProperty(proto, "set", {
  set: function () {}
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
var newObj = Object.create({}, {
  prop: child
});
var desc = Object.getOwnPropertyDescriptor(newObj, "prop");