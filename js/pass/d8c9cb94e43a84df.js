var OProxy = $262.createRealm().global.Proxy;
var p = OProxy.revocable(function () {}, {});
p.revoke();