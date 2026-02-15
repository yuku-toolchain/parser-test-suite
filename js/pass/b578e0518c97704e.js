testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  var src = new TA(1);
  var calledOffset = 0;
  var obj = {
    valueOf: function () {
      $DETACHBUFFER(sample.buffer);
      calledOffset += 1;
    }
  };
});