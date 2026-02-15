Object.defineProperty(Math, "prop", {
  value: 11,
  writable: true,
  configurable: true
});
var hasProperty = Math.hasOwnProperty("prop") && Math.prop === 11;
Object.defineProperties(Math, {
  prop: {
    value: 12
  }
});