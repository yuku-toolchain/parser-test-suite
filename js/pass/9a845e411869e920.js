var proto = {};
proto.prop = {
  value: "abc"
};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
child.prop = {
  value: "bbq"
};
var newObj = Object.create({}, child);