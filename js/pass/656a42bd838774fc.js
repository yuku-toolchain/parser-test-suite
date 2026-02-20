var __obj = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return 1;
  }
};
var __obj2 = {
  toString: function () {
    throw "inend";
  }
};
try {
  var x = ("ABB\u0041BABAB\u0031BBAA").substring(__obj, __obj2);
} catch (e) {
  if (e !== "inend") {}
}