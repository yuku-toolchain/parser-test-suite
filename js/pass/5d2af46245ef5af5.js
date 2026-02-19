var arr = [];
Object.defineProperty(arr, "1", {
  configurable: false,
  writable: false
});
try {
  Object.defineProperties(arr, {
    "1": {
      writable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}