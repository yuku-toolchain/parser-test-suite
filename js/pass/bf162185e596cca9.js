Object.defineProperty(Array.prototype, "0", {
  value: 100,
  writable: false,
  configurable: true
});
var oldArr = [101];
var newArr = Array.prototype.concat.call(oldArr);