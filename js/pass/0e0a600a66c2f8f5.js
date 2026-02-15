testWithBigIntTypedArrayConstructors(function (TA) {
  var sample, result;
  var src = new TA([42n, 43n]);
  sample = new TA([1n, 2n, 3n, 4n]);
  result = sample.set(src, 1);
  sample = new TA([1n, 2n, 3n, 4n]);
  result = sample.set(src, 0);
  sample = new TA([1n, 2n, 3n, 4n]);
  result = sample.set(src, 2);
});