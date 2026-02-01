var obj = {};
obj.foo = 10;
var preCheck = Object.isExtensible(obj);
Object.seal(obj);
Object.seal(obj);