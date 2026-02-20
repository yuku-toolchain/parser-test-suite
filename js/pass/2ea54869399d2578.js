var sym = Symbol();
var seenDescriptors = {};
var proxy = new Proxy({
  [sym]: 1,
  get foo() {},
  set foo(_v) {}
}, {
  defineProperty: function (target, key, descriptor) {
    seenDescriptors[key] = descriptor;
    return Reflect.defineProperty(target, key, descriptor);
  }
});
Object.freeze(proxy);