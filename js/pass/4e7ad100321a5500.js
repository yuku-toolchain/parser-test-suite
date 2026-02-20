var func = function () {
  return arguments.length === 0;
};
var newFunc = Function.prototype.bind.call(func);