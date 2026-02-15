testWithBigIntTypedArrayConstructors(function (TA) {
  var bpe = TA.BYTES_PER_ELEMENT;
  var length = 4;
  var buffer = new ArrayBuffer(bpe * length * 4);
  var ta1 = new TA(buffer, 0, length);
  var ta2 = new TA(buffer, 0, 0);
});