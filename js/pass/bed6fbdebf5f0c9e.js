testWithBigIntTypedArrayConstructors(function (TA) {
  var sample, src, result;
  sample = new TA([1n, 2n, 3n, 4n]);
  src = new TA(sample.buffer, 0, 2);
  result = sample.set(src, 0);
  sample = new TA([1n, 2n, 3n, 4n]);
  src = new TA(sample.buffer, 0, 2);
  result = sample.set(src, 1);
  sample = new TA([1n, 2n, 3n, 4n]);
  src = new TA(sample.buffer, 0, 2);
  result = sample.set(src, 2);
});