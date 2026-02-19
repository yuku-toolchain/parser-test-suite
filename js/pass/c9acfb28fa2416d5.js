testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n]);
  sample.foo = "test262";
  $DETACHBUFFER(sample.buffer);
});