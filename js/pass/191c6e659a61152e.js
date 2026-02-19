testWithBigIntTypedArrayConstructors(function (TA) {
  var loops = 0;
  var sample = new TA(2);
  sample.reduce(function () {
    if (loops === 0) {
      $DETACHBUFFER(sample.buffer);
    }
    loops++;
    return true;
  }, 0);
});