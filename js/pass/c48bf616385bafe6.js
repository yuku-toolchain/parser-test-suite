testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n]);
  $DETACHBUFFER(sample.buffer);
  Object.defineProperty(sample, "foo", {
    value: "bar"
  });
});