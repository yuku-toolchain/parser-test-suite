testWithBigIntTypedArrayConstructors(function (TA) {
  var buffer = new ArrayBuffer(8);
  var sample = new TA(buffer);
});