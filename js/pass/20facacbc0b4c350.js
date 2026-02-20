var arg;
(function fun() {
  arg = arguments;
})();
Object.defineProperty(arg, "0", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: false
});
try {
  Object.defineProperties(arg, {
    "0": {
      writable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}