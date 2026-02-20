var obj = {};
Object.defineProperty(obj, "foo", {
  value: +0,
  writable: false,
  configurable: false
});
try {
  Object.defineProperties(obj, {
    foo: {
      value: -0
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}