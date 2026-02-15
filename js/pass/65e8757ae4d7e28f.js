var arr = [0, 1, 2, 3, 4, 5];
Array.prototype[3] = 6;
Object.defineProperty(arr, "2", {
  get() {
    arr.length = 1;
    return 2;
  }
});