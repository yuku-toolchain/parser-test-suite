var obj = {
  prop: "abc"
};
var func = function () {
  return this === obj && arguments.length === 0;
};
var newFunc = Function.prototype.bind.call(func, obj);