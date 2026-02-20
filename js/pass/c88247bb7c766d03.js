var arr = [];
Object.defineProperty(arr, "property", {
  value: 12,
  enumerable: false
});
try {
  Object.defineProperties(arr, {
    "property": {
      enumerable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}