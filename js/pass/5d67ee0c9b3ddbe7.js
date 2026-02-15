var arg = (function () {
  return arguments;
})(1, 2, 3);
Object.defineProperty(arg, "genericProperty", {
  configurable: false
});
try {
  Object.defineProperties(arg, {
    "genericProperty": {
      configurable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}