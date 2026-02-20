var arr = [0, 1];
Object.defineProperty(arr, "1", {
  value: 1,
  configurable: false
});
var desc = Object.getOwnPropertyDescriptor(arr, "length");