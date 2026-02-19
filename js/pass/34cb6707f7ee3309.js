testWithBigIntTypedArrayConstructors(function (TA) {
  var offset = TA.BYTES_PER_ELEMENT;
  var buffer = new ArrayBuffer(3 * offset);
  var ta1 = new TA(buffer, offset, 2);
  var ta2 = new TA(buffer, offset, 0);
});