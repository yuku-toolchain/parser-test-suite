var proto = {};
var preCheck = Object.isExtensible(proto);
Object.preventExtensions(proto);
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
child.prop = 10;