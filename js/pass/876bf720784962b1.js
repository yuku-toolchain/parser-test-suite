testWithBigIntTypedArrayConstructors(function (TA) {
  var sample1 = new TA();
  var result1 = sample1.copyWithin(0, 0);
  var sample2 = new TA([1n, 2n, 3n]);
  var result2 = sample2.copyWithin(1, 0);
});