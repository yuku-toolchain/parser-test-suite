var arrObj = [];
Object.defineProperty(arrObj, "property", {
  value: 12,
  enumerable: false
});
try {
  Object.defineProperty(arrObj, "property", {
    enumerable: true
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}