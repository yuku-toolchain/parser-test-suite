var o = {};
var getter = function () {
  return 1;
};
var d = {
  get: getter
};
Object.defineProperty(o, "foo", d);
var desc = Object.getOwnPropertyDescriptor(o, "foo");