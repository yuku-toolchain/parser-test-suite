var p = Proxy.revocable({
  attr: 1
}, {});
p.revoke();