var arr = [0, 1, 2];
Object.defineProperty(arr, "0", {
  get() {
    arr.push(4);
    return 0;
  }
});