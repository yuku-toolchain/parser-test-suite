var o = {};
var setter = function (x) {};
var d1 = {
  set: setter
};
Object.defineProperty(o, "foo", d1);
var getter = undefined;
var desc = {
  get: getter
};
Object.defineProperty(o, "foo", desc);
var d2 = Object.getOwnPropertyDescriptor(o, "foo");