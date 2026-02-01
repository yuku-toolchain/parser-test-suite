var arrObj = [];
arrObj.property = 12;
Object.defineProperty(arrObj, "property", {
  writable: false,
  enumerable: false,
  configurable: false
});