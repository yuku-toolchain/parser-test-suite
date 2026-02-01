var foo = {};
var s = new WeakSet([foo]);
var result = s.delete(foo);