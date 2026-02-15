var buffer = new ArrayBuffer(24, {
  maxByteLength: 32
});
var sample = new DataView(buffer, 0, 16);
try {
  buffer.resize(32);
} catch (_) {}
try {
  buffer.resize(16);
} catch (_) {}
var expectedError;
try {
  buffer.resize(8);
  expectedError = TypeError;
} catch (_) {
  expectedError = Test262Error;
}