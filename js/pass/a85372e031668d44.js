testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n]);
  var other = new BigInt64Array([1n, 0n, 1n]);
  var result;
  sample.constructor = {};
  sample.constructor[Symbol.species] = function () {
    return other;
  };
  result = sample.subarray(0, 0);
});