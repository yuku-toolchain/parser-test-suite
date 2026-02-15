testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(42);
  $DETACHBUFFER(sample.buffer);
  let counter = 0;
  for (var key in sample) {
    counter++;
  }
});