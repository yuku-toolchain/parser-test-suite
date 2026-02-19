testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n]);
  $DETACHBUFFER(sample.buffer);
  var s = Symbol("foo");
  Object.defineProperty(sample, s, {
    value: "baz"
  });
});