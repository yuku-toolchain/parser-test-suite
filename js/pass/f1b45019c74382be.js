var arrObj = [];
Object.defineProperty(arrObj, "1", {
  writable: false,
  configurable: false
});
try {
  Object.defineProperty(arrObj, "1", {
    writable: true
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}