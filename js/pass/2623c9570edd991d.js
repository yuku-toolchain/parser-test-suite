var o = {};
var getter = function () {
  return 1;
};
var d1 = {
  get: getter
};
Object.defineProperty(o, "foo", d1);
var desc = {
  set: undefined
};
Object.defineProperty(o, "foo", desc);
var d2 = Object.getOwnPropertyDescriptor(o, "foo");