testWithBigIntTypedArrayConstructors(function (TA) {
  var called = 0;
  new TA().filter(function () {
    called++;
  });
});