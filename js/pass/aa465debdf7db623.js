testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  $DETACHBUFFER(sample.buffer);
});