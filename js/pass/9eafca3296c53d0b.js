var arrObj = [];
Object.defineProperty(arrObj, 0, {
  value: "ownDataProperty",
  configurable: false
});
try {
  Object.defineProperty(arrObj, 0, {
    configurable: true
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}