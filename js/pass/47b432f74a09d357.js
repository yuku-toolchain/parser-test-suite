var arr = [];
Object.defineProperty(arr, "1", {
  value: 3,
  configurable: false
});
try {
  Object.defineProperties(arr, {
    "1": {
      value: 13,
      configurable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}