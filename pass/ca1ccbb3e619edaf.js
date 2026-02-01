testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
  sample.string = "test262";
  $DETACHBUFFER(sample.buffer);
});