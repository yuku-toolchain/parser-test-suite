testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([2n, 1n]);
  var result = sample.sort();
  result = sample.sort(function () {
    return 0;
  });
});