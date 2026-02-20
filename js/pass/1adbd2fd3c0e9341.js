testWithBigIntTypedArrayConstructors(function (TA) {
  var sample;
  sample = new TA([4n, 3n, 2n, 1n]).sort();
  sample = new TA([3n, 4n, 1n, 2n]).sort();
  sample = new TA([3n, 4n, 3n, 1n, 0n, 1n, 2n]).sort();
});
var sample = new BigInt64Array([-4n, 3n, 4n, -3n, 2n, -2n, 1n, 0n]).sort();