Object.defineProperty(JSON, "foo", {
  value: 12,
  configurable: true
});
delete JSON.foo;