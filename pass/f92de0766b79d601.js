var arrObj = [];
Object.defineProperty(arrObj, "1", {
  value: 3,
  configurable: false
});
try {
  Object.defineProperty(arrObj, "1", {
    set: function () {}
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}