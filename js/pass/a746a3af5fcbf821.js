var obj = {};
obj.verifySetFunction = "data";
var get_func = function () {
  return obj.verifySetFunction;
};
var set_func = function (value) {
  obj.verifySetFunction = value;
};
Object.defineProperty(obj, "foo", {
  get: get_func,
  set: set_func,
  enumerable: true,
  configurable: true
});
Object.defineProperty(obj, "foo", {
  configurable: false
});