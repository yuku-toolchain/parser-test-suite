testWithBigIntTypedArrayConstructors(function (TA) {
  var called = 0;
  new TA().map(function () {
    called++;
  });
});