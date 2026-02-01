Object.defineProperty(Number.prototype, Symbol.search, {
  get: function () {}
});
var searchValue = 1;
const searched = ("a1b1c").search(searchValue);