var func = function () {};
var funcTarget = new Proxy(func, {});
var funcProxy = new Proxy(funcTarget, {
  set: undefined
});
var trapCalls = 0;
var target = new Proxy({}, {
  set: function (_target, key) {
    trapCalls++;
    return key === "foo";
  }
});
var proxy = new Proxy(target, {
  set: undefined
});