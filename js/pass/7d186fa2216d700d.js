testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n, 44n]);
  var results = [];
  sample.forEach(function () {
    results.push(arguments);
  });
});