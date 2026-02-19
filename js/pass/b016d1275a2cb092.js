var arr = [5, 1, 4, 6, 3];
Array.prototype[3] = 2;
Object.defineProperty(arr, "2", {
  get() {
    arr.length = 1;
    return 4;
  }
});