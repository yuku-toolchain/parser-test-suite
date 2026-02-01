let other = $262.createRealm().global;
testWithBigIntTypedArrayConstructors(function (TA) {
  let OtherTA = other[TA.name];
  let sample = new OtherTA(1);
  $DETACHBUFFER(sample.buffer);
});