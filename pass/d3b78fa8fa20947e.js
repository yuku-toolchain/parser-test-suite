var arr = [];
Object.defineProperty(arr, "1", {
  value: 3,
  configurable: false,
  enumerable: false
});
try {
  Object.defineProperties(arr, {
    "1": {
      value: 13,
      enumerable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}