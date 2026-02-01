testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(42);
  $DETACHBUFFER(sample.buffer);
});