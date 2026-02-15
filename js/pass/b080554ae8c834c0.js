testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
  Object.defineProperty(sample, "foo", {
    value: 42
  });
});