var __obj = {
  valueOf: function () {
    return 2;
  }
};
var __str = "\u0035ABBBABAB";
if (__str.slice(__obj, (function () {
  return __str.slice(0, 1);
})()) !== "BBB") {}
var x;