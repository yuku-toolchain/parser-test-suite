var obj = {};
Object.defineProperty(obj, "foo", {
  value: "abcd",
  writable: false,
  configurable: false
});
try {
  Object.defineProperty(obj, "foo", {
    value: "fghj"
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}