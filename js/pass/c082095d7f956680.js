var o = Proxy.revocable([], {});
var callCount = 0;
Object.defineProperty(o.proxy, 'constructor', {
  get: function () {
    callCount += 1;
  }
});
o.revoke();