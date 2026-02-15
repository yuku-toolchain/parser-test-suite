var foo = Symbol('a description');
var bar = Symbol('a description');
var map = new WeakMap();
map.set(foo, 1);
map.delete(foo);
map.set(Symbol.hasInstance, 2);
map.delete(Symbol.hasInstance);