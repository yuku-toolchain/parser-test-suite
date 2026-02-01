var __obj = {
  toString: function () {
    throw "insearchValue";
  }
};
var __obj2 = {
  toString: function () {
    throw "inreplaceValue";
  }
};
var __str = "ABB\u0041BABAB";
try {
  var x = __str.replace(__obj, __obj2);
} catch (e) {
  if (e !== "insearchValue") {}
}