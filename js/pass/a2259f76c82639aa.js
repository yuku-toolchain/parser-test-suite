testWithBigIntTypedArrayConstructors(function (TA) {
  var ta1 = new TA();
  var offset = 4 * TA.BYTES_PER_ELEMENT;
  var buffer1 = new ArrayBuffer(8 * TA.BYTES_PER_ELEMENT);
  var ta2 = new TA(buffer1, offset);
  var buffer2 = new ArrayBuffer(8 * TA.BYTES_PER_ELEMENT);
  var sample = new TA(buffer2, offset);
  var ta3 = new TA(sample);
});