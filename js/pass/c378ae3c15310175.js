var o1 = {};
var s = Symbol('1');
var result = Reflect.set(o1, s, 42);
var o2 = {};
o2[s] = 43;
var receiver = {};
receiver[s] = 44;
var result = Reflect.set(o2, s, 42, receiver);