var __obj = {
  toString: function () {
    return "\u0041";
  },
  valueOf: function () {
    return "_\u0041_";
  }
};
var __obj2 = {
  toString: function () {
    return true;
  }
};
var __obj3 = {
  toString: function () {
    return 42;
  }
};
var __str = "lego";
if (__str.concat(__obj) !== "legoA") {}
if (__str.concat(__obj, __obj2, __obj3, x) !== "legoAtrue42undefined") {}
var x;