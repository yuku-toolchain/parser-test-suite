var keys = ['1.0', '+1', '1000000000000000000000', '0.0000001'];
testWithBigIntTypedArrayConstructors(function (TA) {
  keys.forEach(function (key) {
    var sample = new TA([42n]);
    Object.defineProperty(sample, key, {
      writable: false,
      value: undefined
    });
  });
});