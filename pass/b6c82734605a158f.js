var arrObj = [3];
Object.defineProperty(arrObj, "0", {
  value: 1001,
  writable: false,
  enumerable: false
});