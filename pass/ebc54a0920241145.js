var o = {};
var d1 = {
  value: 101,
  enumerable: false,
  configurable: false
};
Object.defineProperty(o, "foo", d1);
var desc = {
  value: 101,
  enumerable: true
};
var d2 = Object.getOwnPropertyDescriptor(o, "foo");