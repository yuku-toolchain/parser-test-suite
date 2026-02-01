var stringTarget = new Proxy(new String("str"), {});
var stringProxy = new Proxy(stringTarget, {});
var functionTarget = new Proxy(function () {}, {});
var functionProxy = new Proxy(functionTarget, {});