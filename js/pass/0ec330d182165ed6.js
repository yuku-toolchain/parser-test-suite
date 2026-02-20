testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([1n, 0n, 2n, 3n, 42n, 127n]);
  var result = sample.join();
});