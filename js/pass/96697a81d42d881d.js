var i = 0;
var p = {
  toString: function () {
    return "arg" + ++i;
  }
};
try {
  var f = Function(p + "," + p, p, "return arg1+arg2+arg3;");
} catch (e) {}