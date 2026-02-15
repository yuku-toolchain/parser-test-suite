var obj = {};
Object.defineProperty(obj, "property", {
  value: 1001,
  writable: false,
  configurable: true
});
Object.defineProperty(obj, "property1", {
  value: 1003,
  writable: false,
  configurable: false
});
try {
  Object.defineProperties(obj, {
    property: {
      value: 1002
    },
    property1: {
      value: 1004
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}