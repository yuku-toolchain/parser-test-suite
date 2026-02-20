var o = {};
var getter = function () {
  return 1;
};
var desc = {
  get: getter
};
Object.defineProperty(o, "foo", desc);
var propDesc = Object.getOwnPropertyDescriptor(o, "foo");