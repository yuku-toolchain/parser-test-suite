var o = {};
var getter = function () {
  return 1;
};
var d1 = {
  get: getter,
  configurable: true
};
Object.defineProperty(o, "foo", d1);
var desc = {
  value: 101
};
Object.defineProperty(o, "foo", desc);
var d2 = Object.getOwnPropertyDescriptor(o, "foo");