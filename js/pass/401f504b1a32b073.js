testWithBigIntTypedArrayConstructors(function (TA) {
  var bpe = TA.BYTES_PER_ELEMENT;
  var length = 4;
  var buffer = new SharedArrayBuffer(bpe * length * 4);
  var ta1 = new TA(buffer, 0, length);
  var ta2 = new TA(buffer, 0, 0);
});