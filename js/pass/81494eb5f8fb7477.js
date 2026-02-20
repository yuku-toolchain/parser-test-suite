var arrObj = [];
Object.defineProperty(arrObj, "1", {
  value: 3,
  writable: true,
  configurable: false
});
try {
  Object.defineProperty(arrObj, "1", {
    value: 13,
    writable: true,
    configurable: true
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}