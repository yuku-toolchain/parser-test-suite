var o = {};
var getter = function () {
  return 1;
};
var d1 = {
  get: getter
};
Object.defineProperty(o, "foo", d1);
var setter = function (x) {};
var desc = {
  set: setter
};
var d2 = Object.getOwnPropertyDescriptor(o, "foo");