var arrObj = [];
Object.defineProperty(arrObj, "1", {
  value: "abc"
});
try {
  Object.defineProperty(arrObj, "1", {
    value: "fgh"
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}