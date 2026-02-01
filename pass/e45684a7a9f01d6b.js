var i = 0;
var p = {
  toString: function () {
    return "a" + ++i;
  }
};
var obj = {};
new Function(p, p, p, "this.shifted=a3;").apply(obj, (function () {
  return arguments;
})("a", "b", "c"));