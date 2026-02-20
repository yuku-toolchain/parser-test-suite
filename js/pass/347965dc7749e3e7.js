var __re = /77/;
var __instance = new Number(1100.00777001);
Number.prototype.replace = String.prototype.replace;
var __obj = {
  toString: function () {
    return function (a1, a2, a3) {
      return a2 + "z";
    };
  }
};
try {
  var x = __instance.replace(__re, __obj) === "1100.007z7001";
} catch (e) {
  if (!(e instanceof TypeError)) {}
}