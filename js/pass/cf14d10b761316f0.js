testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([41n, 1n, 42n, 7n]);
  var result;
  result = sample.filter(function () {
    return true;
  });
  result = sample.filter(function (v) {
    return v > 40n;
  });
});