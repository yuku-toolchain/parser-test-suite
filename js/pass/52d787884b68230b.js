var __obj = {
  toString: function () {
    return {};
  },
  valueOf: function () {
    return 1;
  }
};
var __obj2 = {
  toString: function () {
    throw "inreplaceValue";
  }
};
try {
  var x = ("ABB\u0041BABAB\u0031BBAA").replace(__obj, __obj2);
} catch (e) {
  if (e !== "inreplaceValue") {}
}