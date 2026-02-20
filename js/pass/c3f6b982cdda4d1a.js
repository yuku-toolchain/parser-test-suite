var map = new WeakMap();
var foo = {};
var bar = {};
var baz = {};
map.getOrInsertComputed(foo, () => 1);
map.getOrInsertComputed(bar, () => 2);
map.getOrInsertComputed(baz, () => 3);