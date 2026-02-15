testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n]);
  var otherTA = TA === BigInt64Array ? BigUint64Array : BigInt64Array;
  var other = new otherTA([1n, 0n, 1n]);
  var result;
  sample.constructor = {};
  sample.constructor[Symbol.species] = function () {
    return other;
  };
  result = sample.map(function (a) {
    return a + 7n;
  });
});