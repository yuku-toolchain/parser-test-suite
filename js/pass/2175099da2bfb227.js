testWithBigIntTypedArrayConstructors(function (TA) {
  var sample, src;
  sample = new TA(2);
  src = new TA(2);
  sample = new TA(1);
  src = new TA(2);
  sample = new TA(1);
  src = new TA(0);
  sample = new TA(2);
  src = new TA(2);
});