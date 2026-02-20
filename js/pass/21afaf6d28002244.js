testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([39n, 2n, 62n]);
  var called, result;
  called = 0;
  result = sample.find(function () {
    called++;
    return true;
  });
  called = 0;
  result = sample.find(function (val) {
    called++;
    return val === 62n;
  });
  result = sample.find(function () {
    return "string";
  });
  result = sample.find(function () {
    return {};
  });
  result = sample.find(function () {
    return Symbol("");
  });
  result = sample.find(function () {
    return 1;
  });
  result = sample.find(function () {
    return -1;
  });
});