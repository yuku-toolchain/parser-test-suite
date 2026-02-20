var other = $262.createRealm().global;
var handlers = {
  get: function () {
    handle.revoke();
  }
};
var handle = other.Proxy.revocable(function () {}, handlers);
var f = handle.proxy;