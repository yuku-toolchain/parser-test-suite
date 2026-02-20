var arrayProxy = new Proxy([], {});
var arrayProxyProxy = new Proxy(arrayProxy, {});
var spreadable = {};
spreadable[Symbol.isConcatSpreadable] = true;
var spreadableProxy = new Proxy(spreadable, {});