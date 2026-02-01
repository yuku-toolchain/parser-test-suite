testWithBigIntTypedArrayConstructors(function (TA) {
  var loops = 0;
  var sample = new TA(2);
  sample.filter(function () {
    var flag = true;
    if (loops === 0) {
      $DETACHBUFFER(sample.buffer);
    } else {
      flag = false;
    }
    loops++;
    return flag;
  });
});