var o = {};
var getter = function () {
  return 1;
};
var d1 = {
  get: getter,
  configurable: false
};
Object.defineProperty(o, "foo", d1);
var desc = {
  get: undefined
};
var d2 = Object.getOwnPropertyDescriptor(o, "foo");