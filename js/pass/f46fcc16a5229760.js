testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);
  var buffer = sample.buffer;
  var result = sample.subarray(1);
  sample[1] = 100n;
  result[1] = 111n;
});