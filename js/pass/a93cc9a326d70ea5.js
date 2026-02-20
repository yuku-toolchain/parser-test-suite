var keys = ["1.0", "+1", "1000000000000000000000", "0.0000001"];
testWithBigIntTypedArrayConstructors(function (TA) {
  keys.forEach(function (key) {
    var sample = new TA(1);
    TypedArray.prototype[key] = 42;
    delete TypedArray.prototype[key];
    Object.defineProperty(sample, key, {
      value: 42n
    });
  });
});