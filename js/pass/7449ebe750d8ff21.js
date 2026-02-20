var buffer = new ArrayBuffer(64);
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample, result, expectedLength;
  sample = new TA(buffer, 0);
  expectedLength = sample.length;
  result = sample.reverse();
  sample = new TA(buffer, 0, 0);
  result = sample.reverse();
});