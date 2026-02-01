testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(7);
  var typedArray = new TA(sample);
});