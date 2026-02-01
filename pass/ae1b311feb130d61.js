var __obj = {
  toString: function () {
    return {};
  },
  valueOf: function () {
    return 1;
  }
};
if (("ABB\u0041B\u0031ABAB\u0031BBAA").search(__obj) !== 5) {}