var arr = [1, 2, 3];
Object.defineProperty(arr, "length", {
  writable: false
});
Object.defineProperties(arr, {
  "1": {
    value: "abc"
  }
});