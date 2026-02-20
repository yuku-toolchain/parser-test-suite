var regExp = /(?:)/g;
Object.preventExtensions(regExp);
var regExpTarget = new Proxy(regExp, {});
var regExpProxy = new Proxy(regExpTarget, {});