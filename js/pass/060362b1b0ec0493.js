var arrayTarget = new Proxy([42], {});
var arrayProxy = new Proxy(arrayTarget, {
  getOwnPropertyDescriptor: undefined
});
var regExpTarget = new Proxy(/(?:)/, {});
var regExpProxy = new Proxy(regExpTarget, {
  getOwnPropertyDescriptor: undefined
});