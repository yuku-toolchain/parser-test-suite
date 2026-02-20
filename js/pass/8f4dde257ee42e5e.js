var arrObj = [];
Object.defineProperty(arrObj, 0, {
  value: 101,
  writable: false,
  configurable: false
});
try {
  Object.defineProperty(arrObj, "0", {
    value: 123
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}