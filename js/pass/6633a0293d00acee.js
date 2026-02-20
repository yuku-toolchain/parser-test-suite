var o = Proxy.revocable([], {});
var ctorCount = 0;
var cbCount = 0;
var cb = function () {
  cbCount += 1;
};
Object.defineProperty(o.proxy, 'constructor', {
  get: function () {
    ctorCount += 1;
  }
});
o.revoke();