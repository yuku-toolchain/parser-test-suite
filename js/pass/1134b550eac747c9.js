var foo = Symbol('a description');
var bar = Symbol('a description');
var baz = Symbol('different description');
var map = new WeakMap([[foo, 0]]);
map.set(bar, 1);
map.set(baz, 2);
map.set(Symbol.hasInstance, 3);