var target = {};
var p = new Proxy(target, {});
Object.preventExtensions(target);