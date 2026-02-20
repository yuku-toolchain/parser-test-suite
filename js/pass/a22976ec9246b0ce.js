var arrObj = [1];
Object.defineProperty(arrObj, "0", {
  value: 1001,
  writable: false,
  enumerable: false,
  configurable: false
});