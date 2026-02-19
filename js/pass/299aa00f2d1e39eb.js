testWithBigIntTypedArrayConstructors(function (TA) {
  var calls, result;
  calls = 0;
  result = new TA([1n, 2n, 3n]).reduce(function () {
    calls++;
    if (calls == 2) {
      return 42;
    }
  });
  calls = 0;
  result = new TA([1n, 2n, 3n]).reduce(function () {
    calls++;
    if (calls == 3) {
      return 7;
    }
  }, 0);
});