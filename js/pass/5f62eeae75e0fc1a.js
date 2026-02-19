testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([39n, 3n, 9n]);
  var called = 0;
  var result = sample.findLastIndex(function () {
    called++;
    return true;
  });
  called = 0;
  result = sample.findLastIndex(function (val) {
    called++;
    return val === 39n;
  });
  result = sample.findLastIndex(function () {
    return "string";
  });
  result = sample.findLastIndex(function () {
    return {};
  });
  result = sample.findLastIndex(function () {
    return Symbol("");
  });
  result = sample.findLastIndex(function () {
    return 1;
  });
  result = sample.findLastIndex(function () {
    return -1;
  });
});