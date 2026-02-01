var func = function () {
  return new Boolean(arguments.length === 0);
};
var NewFunc = Function.prototype.bind.call(func);
var newInstance = new NewFunc();