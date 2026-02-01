testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([0n, 1n, 0n]);
  sample.reduce(function () {
    return 42;
  }, 7);
});