var arrObj = [];
Object.defineProperty(arrObj, "1", {
  value: 3,
  writable: false,
  configurable: false
});
try {
  Object.defineProperty(arrObj, "1", {
    value: "abc"
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}