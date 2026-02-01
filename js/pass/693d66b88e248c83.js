var foo = Symbol('a description');
var bar = Symbol('a description');
var map = new WeakMap([[foo, 42], [bar, 43], [Symbol.hasInstance, 44]]);
var result = map.delete(foo);
result = map.delete(Symbol.hasInstance);