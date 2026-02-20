var arr = [0, 1];
Object.defineProperties(arr, {
  length: {
    value: 1
  }
});
arr.length = 10;