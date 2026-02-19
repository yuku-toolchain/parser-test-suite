var arr = [];
Object.defineProperty(arr, "1", {
  value: 3,
  configurable: false,
  writable: false
});
try {
  Object.defineProperties(arr, {
    "1": {
      value: "abc"
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}