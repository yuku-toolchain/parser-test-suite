Object.defineProperty(Number.prototype, Symbol.replace, {
  get: function () {}
});
var searchValue = 1;
const replaced = ("a1b1c").replace(searchValue, "X");