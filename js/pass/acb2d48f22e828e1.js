testWithBigIntTypedArrayConstructors(function (TA) {
  var other = TA === BigInt64Array ? BigUint64Array : BigInt64Array;
  var src = new other([42n, 43n]);
  var sample, result;
  sample = new TA([1n, 2n, 3n, 4n]);
  result = sample.set(src, 0);
  sample = new TA([1n, 2n, 3n, 4n]);
  result = sample.set(src, 1);
  sample = new TA([1n, 2n, 3n, 4n]);
  result = sample.set(src, 2);
});