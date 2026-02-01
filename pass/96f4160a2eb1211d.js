var revocableTarget = Proxy.revocable({}, {});
revocableTarget.revoke();
var revocable = Proxy.revocable(revocableTarget.proxy, {});