var __obj = {
  toString: function () {
    return {};
  },
  valueOf: function () {
    return 1;
  }
};
__obj.toLocaleLowerCase = String.prototype.toLocaleLowerCase;
if (__obj.toLocaleLowerCase() !== "1") {}
if (__obj.toLocaleLowerCase().length !== 1) {}