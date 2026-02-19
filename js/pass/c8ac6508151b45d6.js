testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([41n, 42n, 43n, 44n]);
  var result;
  sample.foo = 42;
  result = sample.subarray(0);
});