var s = Symbol('1');
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  $DETACHBUFFER(sample.buffer);
});