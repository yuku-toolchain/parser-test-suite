testWithBigIntTypedArrayConstructors(function (TA) {
  var called = false;
  var result = new TA([42n]).reduceRight(function () {
    called = true;
  });
});