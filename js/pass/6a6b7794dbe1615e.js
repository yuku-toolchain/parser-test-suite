var foo = Symbol('a description');
var bar = Symbol('a description');
var s = new WeakSet();
s.add(foo);
s.add(bar);
s.add(Symbol.hasInstance);