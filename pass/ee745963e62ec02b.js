testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n]);
  sample.every(function () {
    return 43;
  });
});