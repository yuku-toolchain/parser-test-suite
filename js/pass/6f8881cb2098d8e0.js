var objectProxy = new Proxy({}, {
  getOwnPropertyDescriptor: function () {
    return {
      value: 1,
      writable: true,
      enumerable: true,
      configurable: true
    };
  },
  get: function () {
    return 1;
  },
  ownKeys: function () {
    return ['a', 'b'];
  }
});
var objectProxyProxy = new Proxy(objectProxy, {});