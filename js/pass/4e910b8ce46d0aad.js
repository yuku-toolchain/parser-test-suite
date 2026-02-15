var keys = ["1.0", "+1", "1000000000000000000000", "0.0000001"];
var dataDesc = {
  value: 42,
  writable: true,
  configurable: true
};
var fnset = function () {};
var fnget = function () {};
var acDesc = {
  get: fnget,
  set: fnset,
  enumerable: true,
  configurable: false
};