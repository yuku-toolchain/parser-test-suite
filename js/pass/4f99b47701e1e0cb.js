Object.defineProperty(Array.prototype, "0", {
  value: 11,
  configurable: true
});
var arr = [];
Object.defineProperties(arr, {
  "0": {
    configurable: false
  }
});