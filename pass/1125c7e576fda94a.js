testWithBigIntTypedArrayConstructors(TA => {
  var BPE = TA.BYTES_PER_ELEMENT;
  var ab = new ArrayBuffer(BPE * 4, {
    maxByteLength: BPE * 4
  });
  var target = new TA(ab, 0, 4);
  var source = new TA(new ArrayBuffer(BPE * 4));
  var expectedError;
  try {
    ab.resize(BPE * 3);
    expectedError = TypeError;
  } catch (_) {
    expectedError = Test262Error;
  }
});