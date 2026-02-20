var expected = (function () {
  return this;
})();
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(3);
  var results = [];
  sample.reduceRight(function () {
    results.push(this);
  }, 0);
});