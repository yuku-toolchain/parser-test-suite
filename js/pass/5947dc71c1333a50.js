var P = new Proxy(function () {}, {
  construct: function (t, c, args) {
    return {
      sum: 42
    };
  }
});