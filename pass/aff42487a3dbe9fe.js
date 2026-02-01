testWithBigIntTypedArrayConstructors(function (TA) {
  TypedArray.prototype.baz = "baz";
  let sample = new TA(1);
  sample.foo = "foo";
  Object.defineProperty(sample, "bar", {
    get() {
      return "bar";
    }
  });
});