var keys = ["1.0", "+1", "1000000000000000000000", "0.0000001"];
testWithBigIntTypedArrayConstructors(function (TA) {
  keys.forEach(function (key) {
    var sample = new TA();
    TypedArray.prototype[key] = "test262";
    sample[key] = "bar";
    Object.defineProperty(sample, key, {
      get: function () {
        return "baz";
      }
    });
    delete TypedArray.prototype[key];
  });
});