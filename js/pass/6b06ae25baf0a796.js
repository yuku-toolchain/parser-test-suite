var arrObj = [];
Object.defineProperty(arrObj, 0, {
  value: "abcd",
  writable: false,
  configurable: false
});
try {
  Object.defineProperty(arrObj, "0", {
    value: "fghj"
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}