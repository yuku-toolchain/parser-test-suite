Object.defineProperty(String.prototype, Symbol.search, {
  get: function () {}
});
var searchValue = ",";
const searched = ("a,b,c").search(searchValue);