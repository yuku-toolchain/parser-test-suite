testWithBigIntTypedArrayConstructors(function (TA) {
  var called = false;
  var result = new TA().reduce(function () {
    called = true;
  }, 42);
});