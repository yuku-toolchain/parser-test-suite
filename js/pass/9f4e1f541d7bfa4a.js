var arr = [5, 0, 3];
Object.defineProperty(arr, "0", {
  get() {
    arr.push(1);
    return 5;
  }
});