var arrObj = [100];
Object.defineProperty(arrObj, "0", {
  writable: false,
  enumerable: false,
  configurable: false
});