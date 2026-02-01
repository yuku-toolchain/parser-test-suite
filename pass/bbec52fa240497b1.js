var arr = [];
Object.defineProperty(arr, "1", {
  value: 12
});
try {
  Object.defineProperties(arr, {
    "1": {
      value: 36
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}