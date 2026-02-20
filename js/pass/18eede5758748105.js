testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n]);
  Object.defineProperty(sample, "foo", {
    value: "bar"
  });
});