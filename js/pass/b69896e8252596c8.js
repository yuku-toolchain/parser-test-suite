testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(3);
  var result = sample.map(function (v) {
    return v;
  });
});