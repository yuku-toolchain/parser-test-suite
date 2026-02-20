var arr = [];
Object.defineProperty(arr, "property", {
  value: 12
});
try {
  Object.defineProperties(arr, {
    "property": {
      configurable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}