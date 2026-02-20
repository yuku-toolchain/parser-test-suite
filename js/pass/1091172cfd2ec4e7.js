testWithBigIntTypedArrayConstructors(function (TA) {
  var buffer = new ArrayBuffer(TA.BYTES_PER_ELEMENT);
  var ta = new TA(buffer);
});