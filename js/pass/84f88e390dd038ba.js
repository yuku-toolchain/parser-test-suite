var obj = {};
Object.defineProperty(obj, "foo", {
  value: "abcd",
  writable: false,
  configurable: false
});
try {
  Object.defineProperties(obj, {
    foo: {
      value: "defg"
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}