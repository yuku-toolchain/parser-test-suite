testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA();
  var called = false;
  var result = sample.find(function () {
    called = true;
    return true;
  });
});