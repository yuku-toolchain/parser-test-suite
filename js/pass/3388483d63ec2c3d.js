var map = new WeakMap();
var foo = Symbol('a description');
var bar = Symbol('a description');
map.getOrInsert(foo, 1);
map.getOrInsert(bar, 2);
map.getOrInsert(Symbol.hasInstance, 3);