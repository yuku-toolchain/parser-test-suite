var regexp = $262.IsHTMLDDA;
var matcherGets = 0;
Object.defineProperty(regexp, Symbol.matchAll, {
  get: function () {
    matcherGets += 1;
    return regexp;
  },
  configurable: true
});