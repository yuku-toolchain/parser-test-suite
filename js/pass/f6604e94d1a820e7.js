var revocableHandler = Proxy.revocable({}, {});
revocableHandler.revoke();
var revocable = Proxy.revocable({}, revocableHandler.proxy);