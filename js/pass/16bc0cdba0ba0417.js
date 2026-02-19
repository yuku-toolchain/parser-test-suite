var obj = {};
Object.defineProperty(obj, "foo", {
  value: 10,
  writable: false,
  configurable: false
});
try {
  Object.defineProperties(obj, {
    foo: {
      value: 20
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}