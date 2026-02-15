var functionProxy = new Proxy(function () {}, {});
var functionProxyProxy = new Proxy(functionProxy, {});
var arrowProxy = new Proxy(() => {}, {});
var arrowProxyProxy = new Proxy(arrowProxy, {});
var generatorProxy = new Proxy(function* () {}, {});
var generatorProxyProxy = new Proxy(generatorProxy, {});
var asyncProxy = new Proxy(async function () {}, {});
var asyncProxyProxy = new Proxy(asyncProxy, {});