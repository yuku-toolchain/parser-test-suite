var func = function () {
  return new Boolean(arguments[0] === 1 && arguments.length === 1);
};
var NewFunc = Function.prototype.bind.call(func);
var newInstance = new NewFunc(1);