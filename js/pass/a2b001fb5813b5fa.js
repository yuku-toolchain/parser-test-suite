testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([7n, 8n]);
  var results = [];
  sample.foo = 42;
  sample[Symbol("1")] = 43;
  sample.reduce(function () {
    results.push(arguments);
  }, 0);
});