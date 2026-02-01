var array = [1, 2, 3];
var arrayTarget = new Proxy(array, {});
var arrayProxy = new Proxy(arrayTarget, {
  set: null
});
arrayProxy.length = 0;
Object.preventExtensions(array);
var string = new String("str");
var stringTarget = new Proxy(string, {});
var stringProxy = new Proxy(stringTarget, {
  set: null
});
stringProxy[4] = 1;