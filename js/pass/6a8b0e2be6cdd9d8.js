testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  var loops = 0;
  sample.findLastIndex(function () {
    if (loops === 0) {
      $DETACHBUFFER(sample.buffer);
    }
    loops++;
  });
});