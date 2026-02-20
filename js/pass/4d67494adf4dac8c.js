var arrObj = [];
Object.defineProperty(arrObj, "property", {
  value: 12
});
try {
  Object.defineProperty(arrObj, "property", {
    configurable: true
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}