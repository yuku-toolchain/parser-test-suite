var obj = [];
Object.defineProperty(obj, "0", {
  value: 2010,
  writable: true,
  enumerable: true,
  configurable: false
});
var verifyValue = obj[0] === 2010;
obj[0] = 1001;