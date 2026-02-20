(function (a) {
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  a = 2;
  Object.defineProperty(arguments, "1", {
    get: () => 3,
    configurable: false
  });
})(0);