var arrObj = [];
arrObj[0] = 100;
Object.defineProperty(arrObj, "0", {
  value: 100,
  writable: true,
  enumerable: true,
  configurable: true
});