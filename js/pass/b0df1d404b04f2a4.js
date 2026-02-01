function T() {
  return new Proxy({}, {
    defineProperty: function () {}
  });
}