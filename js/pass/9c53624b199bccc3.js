testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([1n, 2n, 3n]);
  var called = 0;
  var result = sample.findLastIndex(function () {
    called++;
    return false;
  });
  result = sample.findLastIndex(function () {
    return "";
  });
  result = sample.findLastIndex(function () {
    return undefined;
  });
  result = sample.findLastIndex(function () {
    return null;
  });
  result = sample.findLastIndex(function () {
    return 0;
  });
  result = sample.findLastIndex(function () {
    return -0;
  });
  result = sample.findLastIndex(function () {
    return NaN;
  });
});