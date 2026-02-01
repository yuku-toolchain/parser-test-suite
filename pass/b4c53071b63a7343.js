testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n, 44n]);
  var results = [];
  var thisArg = ["test262", 0, "ecma262", 0];
  sample.map(function () {
    results.push(arguments);
    return 0n;
  }, thisArg);
});