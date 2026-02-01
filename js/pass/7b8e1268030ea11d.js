var arrObj = [];
Object.defineProperty(arrObj, "1", {
  value: -0
});
try {
  Object.defineProperty(arrObj, "1", {
    value: +0
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}