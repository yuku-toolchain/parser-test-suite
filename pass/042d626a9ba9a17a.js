var handle1 = Proxy.revocable([], {
  get: function () {
    handle1.revoke();
  }
});
var handle2 = Proxy.revocable({}, {
  get: function () {
    handle2.revoke();
  }
});
var handle2Proxy = new Proxy(handle2.proxy, {});