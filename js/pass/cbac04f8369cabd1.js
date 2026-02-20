Object.defineProperty(BigInt.prototype, Symbol.replace, {
  get: function () {}
});
var searchValue = 1n;
const replaced = ("a1b1c").replace(searchValue, "X");