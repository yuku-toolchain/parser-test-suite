testWithBigIntTypedArrayConstructors(function (TA) {
  var sample1 = new TA();
  var result1 = sample1.fill(1n);
  var sample2 = new TA(42);
  var result2 = sample2.fill(7n);
});