testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA();
  var called = false;
  var result = sample.findLast(function () {
    called = true;
    return true;
  });
});