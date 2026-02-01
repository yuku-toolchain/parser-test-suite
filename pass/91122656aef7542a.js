testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n, 44n, 45n, 46n]);
  var calls = 0;
  var comparefn = function () {
    calls += 1;
  };
});