var arrObj = [1, 2, 3];
Object.defineProperty(Array.prototype, "0", {
  value: "test",
  writable: false,
  configurable: true
});
var newArr = arrObj.slice(0, 1);