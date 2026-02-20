var obj = new Number(-2);
Object.defineProperty(obj, "foo", {
  value: 12,
  configurable: false
});