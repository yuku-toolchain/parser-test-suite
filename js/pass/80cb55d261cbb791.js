testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(3);
  [false, "", 0, -0, NaN, undefined, null].forEach(function (val) {
    var result = sample.filter(function () {
      return val;
    });
  });
});