(function (a, b, c) {
  Object.defineProperty(arguments, "0", {
    value: 10,
    writable: false
  });
  Object.defineProperty(arguments, "0", {
    value: 20
  });
  if (a !== 10) {}
})(0, 1, 2);