testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(3);
  var called = 0;
  var result = sample.findLast(function () {
    called++;
    return false;
  });
  result = sample.findLast(function () {
    return "";
  });
  result = sample.findLast(function () {
    return undefined;
  });
  result = sample.findLast(function () {
    return null;
  });
  result = sample.findLast(function () {
    return 0;
  });
  result = sample.findLast(function () {
    return -0;
  });
  result = sample.findLast(function () {
    return NaN;
  });
});