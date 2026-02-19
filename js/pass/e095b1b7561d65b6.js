testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([41n, 42n, 43n, 44n]);
  sample.foo = 42;
  var result = sample.slice();
});