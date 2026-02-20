var arr = [0, 1, 2, 3, 4];
Array.prototype[1] = 5;
Object.defineProperty(arr, "3", {
  get() {
    arr.length = 1;
    return 3;
  }
});