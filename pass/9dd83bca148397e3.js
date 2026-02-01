var arr = [];
arr.property = 12;
Object.defineProperties(arr, {
  "property": {
    writable: false,
    enumerable: false,
    configurable: false
  }
});
if (arr.length !== 0) {}