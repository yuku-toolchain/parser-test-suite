var __obj = {
  toString: function () {
    return {};
  },
  valueOf: function () {
    throw "intostr";
  }
};
var __str = new String("ABB\u0041BABAB");
try {
  var x = __str.search(__obj);
} catch (e) {
  if (e !== "intostr") {}
}