var arr = [];
Object.defineProperty(arr, "property", {
  value: 12
});
try {
  Object.defineProperties(arr, {
    "property": {
      value: 36
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}