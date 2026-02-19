var map = new WeakMap();
var foo = Symbol('a description');
var bar = Symbol('a description');
map.getOrInsertComputed(foo, () => 1);
map.getOrInsertComputed(bar, () => 2);
map.getOrInsertComputed(Symbol.hasInstance, () => 3);