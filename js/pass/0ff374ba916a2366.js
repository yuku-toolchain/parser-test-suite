var o = {};
var d1 = {
  value: 101,
  configurable: false
};
Object.defineProperty(o, "foo", d1);
var getter = function () {
  return 1;
};
var desc = {
  get: getter
};
var d2 = Object.getOwnPropertyDescriptor(o, "foo");