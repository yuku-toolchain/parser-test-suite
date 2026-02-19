testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([7n, 8n]);
  var bar = Symbol("1");
  sample.foo = 42;
  sample[bar] = 1;
  var result = sample.map(function () {
    return 0n;
  });
});