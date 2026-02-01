var arg = (function () {
  return arguments;
})(1, 2, 3);
Object.defineProperty(arg, "genericProperty", {
  enumerable: true,
  configurable: false
});
try {
  Object.defineProperties(arg, {
    "genericProperty": {
      enumerable: false
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}