var arr = [];
Object.defineProperty(arr, "1", {
  value: +0
});
try {
  Object.defineProperties(arr, {
    "1": {
      value: -0
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}