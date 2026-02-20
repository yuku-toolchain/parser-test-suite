var i = 0;
var p = {
  toString: function () {
    return "a" + ++i;
  }
};
var obj = {};
new Function(p, p, p, "this.shifted=a3+a2+a1.length;").call(obj, (function () {
  return arguments;
})("a", "b", "c", "d"), "", 2);