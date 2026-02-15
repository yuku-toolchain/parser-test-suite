testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([1n, 2n, 4n]);
  var result = sample.map(function (v) {
    return v * 3n;
  });
});