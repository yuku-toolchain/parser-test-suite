var arr = [];
Object.defineProperty(arr, "0", {
  value: +0
});
try {
  Object.defineProperties(arr, {
    "0": {
      value: -0
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}