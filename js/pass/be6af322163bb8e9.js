var arr = [0, 1, 2, 3];
var zerothElementStorage = arr[0];
Object.defineProperty(arr, "0", {
  get() {
    arr[1] = 42;
    return zerothElementStorage;
  },
  set(v) {
    zerothElementStorage = v;
  }
});
Object.defineProperty(arr, "2", {
  get() {
    arr[0] = 17;
    arr[3] = 37;
    return 2;
  }
});