Array.prototype[4] = 5;
var arr = Object.defineProperty([0, 1, 2, 3, 4], "1", {
  get() {
    arr.length = 1;
    return 1;
  }
});
arr = Object.defineProperty([0, 1, 2, 3, 4], "1", {
  get() {
    arr.length = 1;
    return 1;
  }
});