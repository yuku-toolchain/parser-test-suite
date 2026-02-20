var obj = {};
obj.foo = 10;
var preCheck = Object.isExtensible(obj);
Object.freeze(obj);
Object.seal(obj);