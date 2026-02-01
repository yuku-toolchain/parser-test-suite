var __obj = {
  valueOf: function () {
    return 2;
  }
};
var __str = "\u0035ABBBABAB";
if (__str.substring(__obj, (function () {
  return __str.substring(0, 1);
})()) !== "BBB") {}
var x;