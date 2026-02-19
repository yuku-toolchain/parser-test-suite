testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA();
  var called = false;
  var predicate = function () {
    called = true;
    return true;
  };
  var result = sample.findIndex(predicate);
});