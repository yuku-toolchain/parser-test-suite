var s = new WeakSet();
var foo = Symbol('a description');
var bar = Symbol('a description');
var baz = Symbol('a different description');
s.add(foo);
s.add(baz);
s.add(Symbol.hasInstance);