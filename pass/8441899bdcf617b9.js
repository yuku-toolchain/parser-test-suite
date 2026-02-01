var uncoercible = {
  valueOf: function () {}
};
var badLength = new Proxy([], {
  get: function (_, name) {
    if (name === 'length') {
      return uncoercible;
    }
  }
});