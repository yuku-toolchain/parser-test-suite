var symbol = Symbol();
var proxy = new Proxy({}, {
  ownKeys: function () {
    return [symbol, symbol];
  }
});