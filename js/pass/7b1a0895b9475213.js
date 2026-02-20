var __obj = {
  toString: function () {
    throw "intostr";
  }
};
var __str = "ABB\u0041BABAB";
try {
  var x = __str.search(__obj);
} catch (e) {
  if (e !== "intostr") {}
}