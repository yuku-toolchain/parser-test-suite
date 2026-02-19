TypedArray.prototype.baz = "test262";
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n]);
  sample.foo = "bar";
  Object.defineProperty(sample, "bar", {
    get: function () {
      return "baz";
    }
  });
});