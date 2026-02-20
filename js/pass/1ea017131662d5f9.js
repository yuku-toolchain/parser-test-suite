var i = 0;
var p = {
  toString: function () {
    return "a" + ++i;
  }
};
var obj = {};
Function(p, "a2,a3", "this.shifted=a1;").call(obj, new Array("nine", "inch", "nails"));
if (obj["shifted"][0] !== "nine" || obj["shifted"][1] !== "inch" || obj["shifted"][2] !== "nails") {}
if (typeof this["shifted"] !== "undefined") {}