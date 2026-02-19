var P = new Proxy(function () {}, {
  construct: function () {
    return Symbol();
  }
});