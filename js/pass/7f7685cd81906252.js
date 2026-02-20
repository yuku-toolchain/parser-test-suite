var __obj = {
  toString: function () {
    return "\u0041B";
  }
};
var __obj2 = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return "1";
  }
};
if (("ABB\u0041BABAB").indexOf(__obj, __obj2) !== 3) {}