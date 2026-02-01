var obj = {};
function getFunc() {
  return 11;
}
Object.defineProperty(obj, "prop", {
  get: getFunc,
  configurable: false
});
try {
  Object.defineProperties(obj, {
    prop: {
      value: 12,
      configurable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}