var obj = new Boolean(true);
Object.defineProperty(obj, "foo", {
  value: 12,
  configurable: false
});