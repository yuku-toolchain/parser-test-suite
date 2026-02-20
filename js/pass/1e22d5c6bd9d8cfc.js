var obj = {};
Object.defineProperty(obj, "foo", {
  value: 10,
  enumerable: true,
  configurable: false
});
try {
  Object.defineProperties(obj, {
    foo: {
      enumerable: false
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}