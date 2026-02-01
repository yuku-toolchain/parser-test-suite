var OProxy = $262.createRealm().global.Proxy;
var p = OProxy.revocable(Object.create(null), {});
p.revoke();