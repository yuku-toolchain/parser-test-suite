testWithBigIntTypedArrayConstructors(function (TA) {
  var called = 0;
  new TA().reduceRight(function () {
    called++;
  }, undefined);
});