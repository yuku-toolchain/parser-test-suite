var obj = {};
Object.defineProperty(obj, "foo", {
  value: 10,
  configurable: false
});
try {
  Object.defineProperties(obj, {
    foo: {
      configurable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}