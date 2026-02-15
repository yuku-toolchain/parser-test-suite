Object.defineProperty(BigInt.prototype, Symbol.search, {
  get: function () {}
});
var searchValue = 1n;
const searched = ("a1b1c").search(searchValue);