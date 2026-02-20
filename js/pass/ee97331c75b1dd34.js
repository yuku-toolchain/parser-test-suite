var revocableTarget = Proxy.revocable(function () {}, {});
revocableTarget.revoke();
var revocable = Proxy.revocable(revocableTarget.proxy, {});