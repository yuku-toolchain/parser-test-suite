var target = [];
var handle = Proxy.revocable(target, {
  get: function (_, key) {
    if (key === Symbol.isConcatSpreadable) {
      handle.revoke();
    }
    return target[key];
  }
});