var arr = [];
Object.defineProperty(arr, "1", {
  value: "abcd"
});
try {
  Object.defineProperties(arr, {
    "1": {
      value: "efgh"
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}