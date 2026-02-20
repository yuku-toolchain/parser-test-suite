var __obj = {
  toString: function () {
    return {};
  },
  valueOf: function () {
    return 1;
  }
};
__obj.toUpperCase = String.prototype.toUpperCase;
if (__obj.toUpperCase() !== "1") {}
if (__obj.toUpperCase().length !== 1) {}