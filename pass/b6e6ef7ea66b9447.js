var proto = {};
Object.preventExtensions(proto);
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var obj = new ConstructFun();