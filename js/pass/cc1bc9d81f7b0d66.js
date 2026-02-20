var __obj = {
  valueOf: function () {
    throw "instart";
  }
};
var __obj2 = {
  valueOf: function () {
    throw "inend";
  }
};
var __str = "ABB\u0041BABAB";
try {
  var x = __str.slice(__obj, __obj2);
} catch (e) {
  if (e !== "instart") {}
}