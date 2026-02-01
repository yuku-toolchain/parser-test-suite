testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([44n, 43n, 42n]);
  sample.reduceRight(function (a, v, i) {
    if (i > 0) {
      sample[i - 1] = 42n;
    }
  }, 0);
});