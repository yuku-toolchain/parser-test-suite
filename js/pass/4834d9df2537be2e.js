testWithBigIntTypedArrayConstructors(function (TA) {
  let sample = new TA(1);
  $DETACHBUFFER(sample.buffer);
});