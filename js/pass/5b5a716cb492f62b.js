try {
  Object.defineProperty(Math, "foo", {
    value: 12,
    configurable: true
  });
} finally {
  delete Math.foo;
}