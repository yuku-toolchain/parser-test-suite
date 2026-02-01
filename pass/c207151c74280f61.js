testWithBigIntTypedArrayConstructors(function (TA) {
  var loops = 0;
  var sample = new TA(2);
  sample.forEach(function () {
    if (loops === 0) {
      $DETACHBUFFER(sample.buffer);
    }
    loops++;
  });
});