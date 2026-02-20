var o = {};
var desc;
Reflect.defineProperty(o, 'p1', {
  value: 42,
  writable: true,
  enumerable: true
});
var f1 = function () {};
var f2 = function () {};
Reflect.defineProperty(o, 'p2', {
  get: f1,
  set: f2
});
desc = Object.getOwnPropertyDescriptor(o, 'p2');