testWithBigIntTypedArrayConstructors(function (TA) {
  var bpe = TA.BYTES_PER_ELEMENT;
  var buffer = new SharedArrayBuffer(bpe * 4);
  var ta1 = new TA(buffer, bpe * 2);
  var ta2 = new TA(buffer, 0);
});