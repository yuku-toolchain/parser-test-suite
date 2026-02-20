testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n, 44n]);
  var results = [];
  sample.filter(function () {
    results.push(arguments);
  });
});