var arg = (function () {
  return arguments;
})(1, 2, 3);
Object.defineProperty(arg, "genericProperty", {
  writable: false,
  configurable: false
});
try {
  Object.defineProperties(arg, {
    "genericProperty": {
      writable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}