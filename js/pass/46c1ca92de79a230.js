var ab = new ArrayBuffer(4, {
  maxByteLength: 5
});
var dataView = new DataView(ab, 1, 2);
try {
  ab.resize(5);
} catch (_) {}
try {
  ab.resize(BPE * 3);
} catch (_) {}
var expectedError;
try {
  ab.resize(2);
  expectedError = TypeError;
} catch (_) {
  expectedError = Test262Error;
}