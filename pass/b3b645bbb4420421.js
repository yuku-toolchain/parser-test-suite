var ab = new ArrayBuffer(4, {
  maxByteLength: 5
});
var caught = false;
var result;
try {
  result = ab.resize(5);
} catch (_) {
  caught = true;
}
try {
  ab.slice();
} catch (_) {}