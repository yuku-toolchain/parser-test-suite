var arr = [0, 1, 2, 3];
Object.defineProperty(arr, "2", {
  get() {}
});
var result = arr.with(2, 6);