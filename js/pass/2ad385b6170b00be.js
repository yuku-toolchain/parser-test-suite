Object.defineProperty(Boolean.prototype, Symbol.replace, {
  get: function () {}
});
var searchValue = true;
const replaced = ("atruebtruec").replaceAll(searchValue, "X");