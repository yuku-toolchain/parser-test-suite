var foo = {};
var s = new WeakSet();
s.add(foo);
var result = s.delete(foo);