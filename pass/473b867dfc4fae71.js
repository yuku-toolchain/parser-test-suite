var s = Symbol('1');
var o = {};
o[s] = 42;
Reflect.deleteProperty(o, s);