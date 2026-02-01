var regexp = $262.IsHTMLDDA;
var searcherGets = 0;
Object.defineProperty(regexp, Symbol.search, {
  get: function () {
    searcherGets += 1;
    return regexp;
  },
  configurable: true
});