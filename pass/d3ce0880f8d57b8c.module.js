var other = $262.createRealm();
var F = other.evalScript(`
  (function() {
    var proxyObj = Proxy.revocable(function() {}, {});
    var proxy = proxyObj.proxy;
    var revoke = proxyObj.revoke;
    revoke();
    return proxy();
  })
`);