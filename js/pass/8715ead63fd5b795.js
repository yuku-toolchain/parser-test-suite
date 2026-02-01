var obj = {};
Object.defineProperty(obj, "foo", {
  value: "abcd",
  writable: false,
  configurable: false
});
Object.defineProperty(obj, "foo", {
  value: "abcd"
});