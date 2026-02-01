var arr = [];
Object.defineProperty(arr, "prop", {
  value: 11,
  configurable: false
});
try {
  Object.defineProperties(arr, {
    prop: {
      value: 12,
      configurable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}