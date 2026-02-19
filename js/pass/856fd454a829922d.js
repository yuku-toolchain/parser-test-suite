var __obj = {
  toString: function () {
    return {};
  },
  valueOf: function () {
    return 1;
  }
};
__obj.toLocaleUpperCase = String.prototype.toLocaleUpperCase;
if (__obj.toLocaleUpperCase() !== "1") {}
if (__obj.toLocaleUpperCase().length !== 1) {}