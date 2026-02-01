var arrObj = [];
Object.defineProperty(arrObj, "property", {
  writable: false
});
try {
  Object.defineProperty(arrObj, "property", {
    writable: true
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}