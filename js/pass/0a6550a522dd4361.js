testWithBigIntTypedArrayConstructors(function (TA) {
  var sample1 = new TA(42);
  var result1 = sample1.forEach(function () {
    return 42;
  });
  var sample2 = new TA(1);
  var result2 = sample2.forEach(function () {
    return null;
  });
});