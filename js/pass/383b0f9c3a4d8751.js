var arg;
(function fun() {
  arg = arguments;
})();
Object.defineProperty(arg, "0", {
  value: 0,
  writable: false,
  configurable: false
});
try {
  Object.defineProperties(arg, {
    "0": {
      value: 10
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}