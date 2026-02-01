var stringTarget = new Proxy(new String("str"), {});
var stringProxy = new Proxy(stringTarget, {
  get: null
});
var sym = Symbol();
var target = new Proxy({}, {
  has: function (_target, key) {
    return [sym, "6", "foo"].includes(key);
  }
});
var proxy = new Proxy(target, {
  get: null
});