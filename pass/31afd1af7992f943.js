var __obj = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    throw "instart";
  }
};
var __obj2 = {
  valueOf: function () {
    throw "inend";
  }
};
var __str = new String("ABB\u0041BABAB");
try {
  var x = __str.slice(__obj, __obj2);
} catch (e) {
  if (e !== "instart") {}
}