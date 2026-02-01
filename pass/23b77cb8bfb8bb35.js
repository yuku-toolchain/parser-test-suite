var other = $262.createRealm().global;
testWithBigIntTypedArrayConstructors(function (TA) {
  var OtherTA = other[TA.name];
  var sample = new OtherTA(1);
  $DETACHBUFFER(sample.buffer);
});