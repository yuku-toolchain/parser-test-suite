var asyncProxy = new Proxy(async function () {}, {});
var asyncProxyProxy = new Proxy(asyncProxy, {});