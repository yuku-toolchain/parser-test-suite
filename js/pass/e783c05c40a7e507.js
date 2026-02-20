var __obj = {
  toString: function () {
    return "\u0041B";
  }
};
var __obj2 = {
  valueOf: function () {
    return true;
  }
};
var __str = "ABB\u0041BABAB";
if (__str.indexOf(__obj, __obj2) !== 3) {}
var x;