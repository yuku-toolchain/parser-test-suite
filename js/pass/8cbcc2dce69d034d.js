var arrObj = [];
Object.defineProperty(arrObj, "1", {
  value: 12
});
try {
  Object.defineProperty(arrObj, "1", {
    value: 15
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}