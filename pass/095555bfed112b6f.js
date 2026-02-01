testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([1n, 2n, 3n]);
  var called = 0;
  var result = sample.findIndex(function () {
    called++;
    return false;
  });
  result = sample.findIndex(function () {
    return "";
  });
  result = sample.findIndex(function () {
    return undefined;
  });
  result = sample.findIndex(function () {
    return null;
  });
  result = sample.findIndex(function () {
    return 0;
  });
  result = sample.findIndex(function () {
    return -0;
  });
  result = sample.findIndex(function () {
    return NaN;
  });
});