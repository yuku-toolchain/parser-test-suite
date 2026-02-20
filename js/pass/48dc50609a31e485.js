Object.defineProperty(String.prototype, Symbol.replace, {
  get: function () {}
});
var searchValue = ",";
const replaced = ("a,b,c").replaceAll(searchValue, "X");