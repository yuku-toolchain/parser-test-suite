var arg;
(function fun(a, b, c) {
  arg = arguments;
})(0, 1, 2);
Object.defineProperty(arg, "0", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: false
});
try {
  Object.defineProperties(arg, {
    "0": {
      configurable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}