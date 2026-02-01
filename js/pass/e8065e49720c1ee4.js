var obj = new RegExp();
Object.defineProperty(obj, "prop", {
  value: 11,
  configurable: false
});
try {
  Object.defineProperties(obj, {
    prop: {
      value: 12,
      configurable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}