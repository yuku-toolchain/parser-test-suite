var o = {};
var desc;
var s1 = Symbol('1');
Reflect.defineProperty(o, s1, {
  value: 42,
  writable: true,
  enumerable: true
});
desc = Object.getOwnPropertyDescriptor(o, s1);
var s2 = Symbol('2');
var f1 = function () {};
var f2 = function () {};
Reflect.defineProperty(o, s2, {
  get: f1,
  set: f2
});
desc = Object.getOwnPropertyDescriptor(o, s2);