var foo = Symbol('a description');
var bar = Symbol('a description');
var map = new WeakMap();
map.set(foo, 42);
map.set(bar, 43);
var result = map.delete(foo);
map.set(Symbol.hasInstance, 44);
result = map.delete(Symbol.hasInstance);