var buffer = new ArrayBuffer(64);
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(buffer, 0, 4);
  var other = new TA(buffer, 0, 5);
  sample[0] = 42n;
  sample[1] = 43n;
  sample[2] = 2n;
  sample[3] = 1n;
  other[4] = 7n;
  sample.reverse();
  sample[0] = 7n;
  sample[1] = 17n;
  sample[2] = 1n;
  sample[3] = 0n;
  other[4] = 42n;
  other.reverse();
});