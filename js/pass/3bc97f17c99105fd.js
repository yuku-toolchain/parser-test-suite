testWithBigIntTypedArrayConstructors(function (TA) {
  var called = 0;
  new TA().forEach(function () {
    called++;
  });
});