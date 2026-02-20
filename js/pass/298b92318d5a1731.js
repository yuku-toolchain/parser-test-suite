testWithBigIntTypedArrayConstructors(function (TA) {
  var called = 0;
  new TA().reduce(function () {
    called++;
  }, undefined);
});