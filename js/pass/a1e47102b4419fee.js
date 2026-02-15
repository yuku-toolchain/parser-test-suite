var obj = {};
obj.foo = 10;
var preCheck = Object.isExtensible(obj);
Object.preventExtensions(obj);
Object.seal(obj);