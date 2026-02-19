var arrObj = [0, 1];
Object.defineProperty(Array.prototype, "1", {
  get: function () {
    return 1;
  },
  configurable: true
});
Object.defineProperty(arrObj, "length", {
  value: 1
});