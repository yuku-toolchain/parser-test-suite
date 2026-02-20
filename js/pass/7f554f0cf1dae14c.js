var fun = function () {};
Object.defineProperty(fun, "prop", {
  value: 11,
  configurable: false
});
try {
  Object.defineProperties(fun, {
    prop: {
      value: 12,
      configurable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}