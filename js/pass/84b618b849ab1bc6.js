var foo = Symbol('a description');
var s = new WeakSet();
s.add(foo);
s.add(Symbol.hasInstance);