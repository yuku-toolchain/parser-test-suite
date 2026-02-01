testWithBigIntTypedArrayConstructors(function (TA) {
  var called = 0;
  new TA().every(function () {
    called++;
  });
});