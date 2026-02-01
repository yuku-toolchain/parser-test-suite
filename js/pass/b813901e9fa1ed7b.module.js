testWithBigIntTypedArrayConstructors(function (TA) {
  var keys = ["1.0", "+1", "1000000000000000000000", "0.0000001"];
  keys.forEach(key => {
    var sample = new TA();
    TypedArray.prototype[key] = key;
    sample[key] = key;
    Object.defineProperty(sample, key, {
      get() {
        return key;
      }
    });
    delete TypedArray.prototype[key];
  });
});