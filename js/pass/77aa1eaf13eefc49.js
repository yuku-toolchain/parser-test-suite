var arg = (function () {
  return arguments;
})(1, 2, 3);
Object.defineProperty(arg, "genericProperty", {
  value: 1001,
  writable: false,
  configurable: false
});
try {
  Object.defineProperties(arg, {
    "genericProperty": {
      value: 1002
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}