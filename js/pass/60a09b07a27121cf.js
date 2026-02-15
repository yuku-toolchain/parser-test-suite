var obj = {};
Object.defineProperty(obj, "foo", {
  value: 10,
  enumerable: false,
  configurable: false
});
try {
  Object.defineProperties(obj, {
    foo: {
      enumerable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}