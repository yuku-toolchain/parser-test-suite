var o = {};
var d1 = {
  value: 101
};
Object.defineProperty(o, "foo", d1);
var desc = {
  value: 101,
  writable: true
};
var d2 = Object.getOwnPropertyDescriptor(o, "foo");