testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n, 44n]);
  sample.filter(function (v, i) {
    if (i < sample.length - 1) {
      sample[i + 1] = 42n;
    }
  });
});