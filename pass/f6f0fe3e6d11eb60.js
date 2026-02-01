var arrayTarget = new Proxy([], {});
var arrayProxy = new Proxy(arrayTarget, {
  getPrototypeOf: undefined
});