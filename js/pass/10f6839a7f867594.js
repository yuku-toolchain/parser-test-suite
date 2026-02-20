var foo = {};
var map = new WeakMap([[foo, 42]]);
var result = map.delete(foo);