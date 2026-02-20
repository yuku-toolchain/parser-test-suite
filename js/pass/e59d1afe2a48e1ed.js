var searchValue = $262.IsHTMLDDA;
var replacerGets = 0;
Object.defineProperty(searchValue, Symbol.replace, {
  get: function () {
    replacerGets += 1;
    return searchValue;
  },
  configurable: true
});