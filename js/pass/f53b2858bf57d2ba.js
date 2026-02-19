var obj = {};
Object.defineProperty(obj, "foo", {
  value: false,
  writable: false,
  configurable: false
});
try {
  Object.defineProperties(obj, {
    foo: {
      value: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}