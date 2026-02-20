var map = new WeakMap();
var key = Symbol('a description');
map.set(key, 1);
map.set(Symbol.hasInstance, 2);
map.delete(key);
map.delete(Symbol.hasInstance);