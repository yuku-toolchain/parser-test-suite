testWithBigIntTypedArrayConstructors(function (TA) {
  var buffer = new SharedArrayBuffer(8);
  var sample = new TA(buffer);
});