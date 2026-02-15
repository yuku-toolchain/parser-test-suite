testWithBigIntTypedArrayConstructors(function (TA) {
  var bpe = TA.BYTES_PER_ELEMENT;
  var buffer = new SharedArrayBuffer(bpe);
});