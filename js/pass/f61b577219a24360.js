var arrObj = [];
Object.defineProperty(arrObj, "1", {
  value: false
});
try {
  Object.defineProperty(arrObj, "1", {
    value: true
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}