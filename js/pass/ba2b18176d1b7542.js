var str = new String();
Object.defineProperty(str, "prop", {
  value: 11,
  configurable: false
});
try {
  Object.defineProperties(str, {
    prop: {
      value: 12,
      configurable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}