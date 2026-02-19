var target = {};
var p = new Proxy(target, {
  defineProperty: function (t, prop, desc) {
    return Object.defineProperty(t, prop, desc);
  }
});
var result = Reflect.defineProperty(p, "attr", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 1
});
result = Reflect.defineProperty(p, "attr", {
  configurable: false,
  enumerable: false,
  writable: false,
  value: 2
});