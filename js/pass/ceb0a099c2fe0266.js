var revocable = Proxy.revocable({}, {});
revocable.revoke();
var proxy = new Proxy(revocable.proxy, {});