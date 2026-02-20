var fun = function () {};
Object.defineProperty(fun, "foo", {
  value: 12,
  configurable: false
});