(function (a) {
  let setCalls = 0;
  Object.defineProperty(arguments, "0", {
    set(_v) {
      setCalls += 1;
    },
    enumerable: true,
    configurable: true
  });
  arguments[0] = "foo";
  Object.defineProperty(arguments, "1", {
    get: () => "bar",
    enumerable: true,
    configurable: true
  });
})(0);