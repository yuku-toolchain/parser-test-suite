var foo = Symbol('a description');
var bar = Symbol('a description');
var s = new WeakSet();
s.add(foo);
s.delete(foo);
s.delete(Symbol.hasInstance);