var __obj = {
  toString: function () {
    return "\u0041B";
  }
};
var __obj2 = {
  valueOf: function () {
    return NaN;
  }
};
var __str = "ABB\u0041BABAB";
if (__str.lastIndexOf(__obj, __obj2) !== 7) {}
var x;