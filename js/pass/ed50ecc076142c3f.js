var o = {};
o["foo"] = 101;
var getter = function () {
  return 1;
};
var d1 = {
  get: getter
};
Object.defineProperty(o, "foo", d1);
var d2 = Object.getOwnPropertyDescriptor(o, "foo");