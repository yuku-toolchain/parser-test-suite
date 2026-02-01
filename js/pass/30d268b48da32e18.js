testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(3);
  var called = 0;
  var result = sample.find(function () {
    called++;
    return false;
  });
  result = sample.find(function () {
    return "";
  });
  result = sample.find(function () {
    return undefined;
  });
  result = sample.find(function () {
    return null;
  });
  result = sample.find(function () {
    return 0;
  });
  result = sample.find(function () {
    return -0;
  });
  result = sample.find(function () {
    return NaN;
  });
});