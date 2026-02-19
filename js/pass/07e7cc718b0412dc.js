testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA();
  var target = new TA();
  var calledOffset = 0;
  var obj = {
    valueOf: function () {
      $DETACHBUFFER(target.buffer);
      calledOffset += 1;
    }
  };
});