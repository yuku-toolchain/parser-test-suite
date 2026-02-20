testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n]);
  var result;
  result = sample.filter(function () {
    return true;
  });
  result = sample.filter(function () {
    return false;
  });
});