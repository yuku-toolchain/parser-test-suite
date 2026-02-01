var sample1 = new BigInt64Array(7);
var sample2 = new BigUint64Array(7);
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = TA === BigInt64Array ? sample2 : sample1;
  var typedArray = new TA(sample);
});