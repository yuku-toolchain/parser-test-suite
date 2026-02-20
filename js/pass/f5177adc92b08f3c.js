var arr = [0, 1];
Object.defineProperties(arr, {
  length: {
    value: 1,
    writable: true
  }
});
arr.length = 10;