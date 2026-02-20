testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n, 44n]);
  var newVal = 0n;
  sample.reduceRight(function (acc, val, i) {
    if (i < sample.length - 1) {}
    newVal++;
  }, 0);
});