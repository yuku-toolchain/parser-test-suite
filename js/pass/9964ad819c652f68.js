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
    throw "intointeger";
  }
};
var __str = new String("ABB\u0041BABAB");
try {
  var x = __str.lastIndexOf(__obj, __obj2);
} catch (e) {
  if (e !== "intointeger") {}
}