var arr = [0, 1, 2];
Object.defineProperty(arr, "1", {
  configurable: false
});
Object.defineProperty(arr, "2", {
  configurable: true
});