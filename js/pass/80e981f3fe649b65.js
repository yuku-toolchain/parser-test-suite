var arrayProxy = new Proxy([], {
  get: function (_target, key) {
    if (key === 'length') return 2;
    return Number(key);
  }
});
var arrayProxyProxy = new Proxy(arrayProxy, {});