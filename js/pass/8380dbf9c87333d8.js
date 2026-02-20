testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);
  var result = sample.subarray(1);
});