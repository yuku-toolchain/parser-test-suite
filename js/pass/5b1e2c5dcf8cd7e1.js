var o = {};
var s = Symbol('42');
o[s] = 42;
var result = Reflect.getOwnPropertyDescriptor(o, s);