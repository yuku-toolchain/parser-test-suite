Object.defineProperty(this, "prop", {
  value: 11,
  writable: true,
  enumerable: true,
  configurable: true
});
Object.defineProperties(this, {
  prop: {
    value: 12
  }
});
delete this.prop;