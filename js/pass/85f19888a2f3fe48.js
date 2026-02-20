testWithBigIntTypedArrayConstructors(function (TA) {
  let sample = new TA(1);
  Object.defineProperty(sample, "foo", {
    get() {}
  });
});