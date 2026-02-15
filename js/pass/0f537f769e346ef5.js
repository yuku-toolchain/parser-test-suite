testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([39n, 2n, 62n]);
  var results = [];
  var result;
  sample.foo = "bar";
  sample.find(function () {
    results.push(arguments);
  });
  result = results[0];
  result = results[1];
  result = results[2];
});