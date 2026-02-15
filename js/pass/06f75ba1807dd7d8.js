var ab = new ArrayBuffer(4, {
  maxByteLength: 5
});
var dataView = new DataView(ab, 1);
var expected = 3;
try {
  ab.resize(5);
  expected = 4;
} catch (_) {}
try {
  ab.resize(3);
  expected = 2;
} catch (_) {}
try {
  ab.resize(1);
  expected = 0;
} catch (_) {}
try {
  ab.resize(0);
  expected = TypeError;
} catch (_) {
  expected = Test262Error;
}