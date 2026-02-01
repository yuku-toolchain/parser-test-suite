var arrObj = [];
Object.defineProperty(arrObj, "property", {
  value: 12
});
try {
  Object.defineProperty(arrObj, "property", {
    value: 36
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}