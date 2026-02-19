testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  var calledOffset = 0;
  var obj = {
    valueOf: function () {
      $DETACHBUFFER(sample.buffer);
      calledOffset += 1;
    }
  };
});