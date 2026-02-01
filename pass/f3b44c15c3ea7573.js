var regExp = /(?:)/m;
var regExpTarget = new Proxy(regExp, {});
var regExpProxy = new Proxy(regExpTarget, {});
var functionTarget = new Proxy(function () {}, {});
var functionProxy = new Proxy(functionTarget, {});