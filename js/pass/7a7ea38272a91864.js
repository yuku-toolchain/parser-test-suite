var str = new String("abc");
Object.defineProperty(str, "foo", {
  value: 12,
  configurable: false
});