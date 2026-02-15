testWithBigIntTypedArrayConstructors(function (TA) {
  var sample1 = new TA(3);
  sample1[1] = 1n;
  sample1.forEach(function () {
    return 42;
  });
});