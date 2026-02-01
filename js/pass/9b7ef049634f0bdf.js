testWithBigIntTypedArrayConstructors(function (TA) {
  var bpe = TA.BYTES_PER_ELEMENT;
  var buffer1 = new ArrayBuffer(bpe * 4);
  var ta1 = new TA(buffer1);
  var buffer2 = new ArrayBuffer(0);
  var ta2 = new TA(buffer2);
});