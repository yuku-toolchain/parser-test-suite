testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n, 44n]);
  var newVal = 0n;
  sample.forEach(function (val, i) {
    if (i > 0) {}
    newVal++;
  });
});