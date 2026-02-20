var arr = [];
Object.defineProperty(arr, "property", {
  writable: false
});
try {
  Object.defineProperties(arr, {
    "property": {
      writable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}