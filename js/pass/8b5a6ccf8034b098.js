var map = new WeakMap();
var foo = Symbol('a description');
var bar = Symbol('a description');
map.set(foo, 1);
map.set(bar, 2);
map.set(Symbol.hasInstance, 3);