var arr = [0, 1];
Array.prototype[1] = 2;
Object.defineProperties(arr, {
  length: {
    value: 1
  }
});