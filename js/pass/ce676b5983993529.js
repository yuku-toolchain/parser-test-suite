var map = new WeakMap();
var foo = {};
var bar = {};
var baz = {};
map.getOrInsert(foo, 1);
map.getOrInsert(bar, 2);
map.getOrInsert(baz, 3);