testWithBigIntTypedArrayConstructors(function (TA) {
  var called = false;
  var result = new TA().reduceRight(function () {
    called = true;
  }, 42);
});