var obj = {
  prop: "abc"
};
var func = function () {
  return this === obj && arguments[0] === 1 && arguments[1] === 2;
};
var newFunc = Function.prototype.bind.call(func, obj, 1);