(function () {
  Object.defineProperty(arguments, "0", {
    value: 10,
    writable: false
  });
  Object.defineProperty(arguments, "0", {
    value: 20
  });
})(0, 1, 2);