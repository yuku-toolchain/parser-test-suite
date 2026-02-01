var func = function (x, y, z) {
  return z;
};
var newFunc = Function.prototype.bind.call(func, {}, "a", "b");