Object.defineProperty(Boolean.prototype, Symbol.search, {
  get: function () {}
});
var searchValue = true;
const searched = ("atruebtruec").search(searchValue);