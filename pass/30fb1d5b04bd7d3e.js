var __obj = {
  toString: function () {
    return {};
  },
  valueOf: function () {
    throw "insearchValue";
  }
};
var __obj2 = {
  toString: function () {
    throw "inreplaceValue";
  }
};
var __str = new String("ABB\u0041BABAB");
try {
  var x = __str.replace(__obj, __obj2);
} catch (e) {
  if (e !== "insearchValue") {}
}