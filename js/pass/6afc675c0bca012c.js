testWithBigIntTypedArrayConstructors(function (TA) {
  let sample = new TA(0);
  $DETACHBUFFER(sample.buffer);
});