testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(42);
  [false, "", 0, -0, NaN, undefined, null].forEach(function (val) {
    var called = 0;
    var result = sample.some(function () {
      called++;
      return val;
    });
  });
});