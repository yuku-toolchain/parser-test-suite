testWithBigIntTypedArrayConstructors(function (TA) {
  var called = 0;
  new TA().some(function () {
    called++;
  });
});