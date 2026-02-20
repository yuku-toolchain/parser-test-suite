var revocable = Proxy.revocable(function () {}, {});
revocable.revoke();
var proxy = new Proxy(revocable.proxy, {});