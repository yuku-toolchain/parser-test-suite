var handlers = {
  get: function () {
    handle.revoke();
  }
};
var handle = Proxy.revocable(function () {}, handlers);
var f = handle.proxy;