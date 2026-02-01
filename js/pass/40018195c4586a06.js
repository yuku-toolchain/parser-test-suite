var foo = {};
var map = new WeakMap();
map.set(foo, 42);
var result = map.delete(foo);