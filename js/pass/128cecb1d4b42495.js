(function (a) {
  Object.defineProperty(arguments, "0", {
    value: "foo",
    writable: true,
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(arguments, "1", {
    value: "bar",
    writable: true,
    enumerable: true,
    configurable: true
  });
})(0);