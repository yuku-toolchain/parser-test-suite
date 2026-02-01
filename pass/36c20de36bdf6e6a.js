testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([39n, 2n, 62n]);
  var called, result;
  called = 0;
  result = sample.findLast(function () {
    called++;
    return true;
  });
  called = 0;
  result = sample.findLast(function (val) {
    called++;
    return val === 39n;
  });
  result = sample.findLast(function () {
    return "string";
  });
  result = sample.findLast(function () {
    return {};
  });
  result = sample.findLast(function () {
    return Symbol("");
  });
  result = sample.findLast(function () {
    return 1;
  });
  result = sample.findLast(function () {
    return -1;
  });
});