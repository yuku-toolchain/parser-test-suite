var arr = [42n, 43n, 44n];
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(arr);
  var other = TA === BigInt64Array ? BigUint64Array : BigInt64Array;
  sample.constructor = {};
  sample.constructor[Symbol.species] = other;
  var result = sample.slice();
});