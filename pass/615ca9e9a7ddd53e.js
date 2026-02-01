Object.defineProperty(JSON, "prop", {
  value: 11,
  writable: true,
  configurable: true
});
var hasProperty = JSON.hasOwnProperty("prop") && JSON.prop === 11;
Object.defineProperties(JSON, {
  prop: {
    value: 12
  }
});