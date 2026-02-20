testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n]);
  Object.defineProperty(sample, "bar", {
    value: 42
  });
  $DETACHBUFFER(sample.buffer);
});