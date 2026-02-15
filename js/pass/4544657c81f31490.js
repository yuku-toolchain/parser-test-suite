var ab = new ArrayBuffer(4, {
  maxByteLength: 5
});
var dataView = new DataView(ab, 1);
try {
  ab.resize(5);
} catch (_) {}
try {
  ab.resize(3);
} catch (_) {}
try {
  ab.resize(1);
} catch (_) {}
var expectedError;
try {
  ab.resize(0);
  expectedError = TypeError;
} catch (_) {
  expectedError = Test262Error;
}