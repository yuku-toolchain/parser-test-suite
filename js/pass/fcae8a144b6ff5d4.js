const rp1 = Proxy.revocable({}, {});
rp1.revoke();
const rp2 = Proxy.revocable(function () {}, {});
rp2.revoke();