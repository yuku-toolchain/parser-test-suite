var arrObj = [0, 1, 2];
Object.defineProperty(arrObj, "1", {
  configurable: false
});
Object.defineProperty(arrObj, "2", {
  configurable: true
});