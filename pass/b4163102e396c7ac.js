var arr = [];
Object.defineProperty(arr, "1", {
  value: true
});
try {
  Object.defineProperties(arr, {
    "1": {
      value: false
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}