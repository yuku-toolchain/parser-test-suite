testWithBigIntTypedArrayConstructors(function (TA) {
  var bytesPerElement = TA.BYTES_PER_ELEMENT;
  var ta1 = new TA();
  var ta2 = new TA(42);
});