var callbackfn = function () {};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
  $DETACHBUFFER(sample.buffer);
});