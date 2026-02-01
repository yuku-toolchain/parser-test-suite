var i = 0;
var p = {
  toString: function () {
    return "a" + ++i;
  }
};
var obj = {};
Function(p, "a2,a3", "this.shifted=a1;").apply(obj, new Array("nine", "inch", "nails"));