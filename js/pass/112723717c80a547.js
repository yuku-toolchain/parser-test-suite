var __obj = {
  toString: function () {
    return "\u0041B";
  }
};
var __obj2 = {
  valueOf: function () {
    throw "intointeger";
  }
};
var __str = "ABB\u0041BABAB";
try {
  var x = __str.split(__obj, __obj2);
} catch (e) {}