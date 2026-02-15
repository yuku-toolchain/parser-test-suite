var regExp = /(?:)/i;
var regExpTarget = new Proxy(regExp, {});
var regExpProxy = new Proxy(regExpTarget, {});
var functionTarget = new Proxy(function (_arg) {}, {});
var functionProxy = new Proxy(functionTarget, {});