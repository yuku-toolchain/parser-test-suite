var array = [];
var arrayExtensible = true;
var arrayTarget = new Proxy(array, {
  isExtensible: function () {
    return arrayExtensible;
  }
});
var arrayProxy = new Proxy(arrayTarget, {
  isExtensible: undefined
});
Object.preventExtensions(array);
arrayExtensible = false;