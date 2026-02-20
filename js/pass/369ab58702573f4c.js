var func = function (x) {
  return new Boolean(arguments.length === 0 && typeof x === "undefined");
};
var NewFunc = Function.prototype.bind.call(func, {});
var newInstance = new NewFunc();