var arr = [0, 1, 2];
Object.defineProperty(arr, "0", {
  get() {
    arr.push(10);
    return 0;
  }
});
Object.defineProperty(arr, "2", {
  get() {
    arr.push(11);
    return 2;
  }
});