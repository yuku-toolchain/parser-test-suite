testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n, 44n]);
  var results = [];
  sample.reduceRight(function (accumulator) {
    results.push(arguments);
    return accumulator + 1n;
  });
});