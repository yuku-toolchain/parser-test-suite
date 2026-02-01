testWithBigIntTypedArrayConstructors(function (TA) {
  var offset = TA.BYTES_PER_ELEMENT;
  var buffer = new ArrayBuffer(3 * offset);
  $DETACHBUFFER(buffer);
});