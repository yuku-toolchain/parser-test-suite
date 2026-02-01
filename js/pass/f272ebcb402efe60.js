var foo = {};
var bar = {};
var map = new WeakMap();
map.set(foo, 1);
map.delete(foo);