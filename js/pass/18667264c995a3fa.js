var proto = {};
proto.prop = {};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
var newObj = Object.create({}, child);