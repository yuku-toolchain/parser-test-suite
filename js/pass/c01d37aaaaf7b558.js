var array = [];
var arrayTarget = new Proxy(array, {});
var arrayProxy = new Proxy(arrayTarget, {
  defineProperty: undefined
});
Object.defineProperty(arrayProxy, "0", {
  value: 1
});
var trapCalls = 0;
var target = new Proxy({}, {
  defineProperty: function (_target, key) {
    trapCalls++;
    return key === "foo";
  }
});
var proxy = new Proxy(target, {
  defineProperty: undefined
});