var generatorProxy = new Proxy(function* () {}, {});
var generatorProxyProxy = new Proxy(generatorProxy, {});
delete generatorProxy.constructor.prototype[Symbol.toStringTag];
var asyncProxy = new Proxy(async function () {}, {});
var asyncProxyProxy = new Proxy(asyncProxy, {});
Object.defineProperty(asyncProxy.constructor.prototype, Symbol.toStringTag, {
  value: undefined
});