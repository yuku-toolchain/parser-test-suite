var obj = {
  "prop": "a"
};
var func = function () {
  return this;
};
var newFunc = Function.prototype.bind.call(func, obj);