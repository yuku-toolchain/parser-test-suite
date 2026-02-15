var arrObj = [];
Object.defineProperty(arrObj, 0, {
  value: true,
  writable: false,
  configurable: false
});
try {
  Object.defineProperty(arrObj, "0", {
    value: false
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}