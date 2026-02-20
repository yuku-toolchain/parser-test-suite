var locales = {
  '0': 'en-US',
  '1': 'pt-BR',
  length: 2
};
var p = new Proxy(locales, {
  has: function (_, prop) {
    if (prop === '0') {}
  }
});