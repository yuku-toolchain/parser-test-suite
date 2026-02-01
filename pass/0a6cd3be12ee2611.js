testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([39n, 3n, 9n]);
  var called = 0;
  var result = sample.findIndex(function () {
    called++;
    return true;
  });
  called = 0;
  result = sample.findIndex(function (val) {
    called++;
    return val === 9n;
  });
  result = sample.findIndex(function () {
    return "string";
  });
  result = sample.findIndex(function () {
    return {};
  });
  result = sample.findIndex(function () {
    return Symbol("");
  });
  result = sample.findIndex(function () {
    return 1;
  });
  result = sample.findIndex(function () {
    return -1;
  });
});