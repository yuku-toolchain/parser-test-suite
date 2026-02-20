var array = [];
var arrayTarget = new Proxy(array, {});
var arrayProxy = new Proxy(arrayTarget, {
  setPrototypeOf: undefined
});
Object.setPrototypeOf(arrayProxy, Number.prototype);
Object.preventExtensions(array);