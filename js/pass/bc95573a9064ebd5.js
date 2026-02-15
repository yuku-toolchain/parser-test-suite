var __obj = {
  toString: function () {
    return {};
  },
  valueOf: function () {
    return 1;
  }
};
__obj.toLowerCase = String.prototype.toLowerCase;
if (__obj.toLowerCase() !== "1") {}
if (__obj.toLowerCase().length !== 1) {}