var proxyProto = [];
var handler = allowProxyTraps({
  getPrototypeOf: function (_target) {
    return proxyProto;
  }
});
var proxy = new Proxy({}, handler);