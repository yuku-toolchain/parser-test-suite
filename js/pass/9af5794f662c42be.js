var func = function () {
  return arguments[0] === 1;
};
var newFunc = Function.prototype.bind.call(func);