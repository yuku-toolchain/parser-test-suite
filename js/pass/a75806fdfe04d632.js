var array = [1];
var arrayTarget = new Proxy(array, {});
var arrayProxy = new Proxy(arrayTarget, {
  deleteProperty: undefined
});
var trapCalls = 0;
var target = new Proxy({}, {
  deleteProperty: function (_target, key) {
    trapCalls++;
    return key === "foo";
  }
});
var proxy = new Proxy(target, {
  deleteProperty: undefined
});