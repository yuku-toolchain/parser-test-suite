var ab = new ArrayBuffer(0, {
  maxByteLength: 0
});
var caught = false;
var result;
try {
  result = ab.resize(0);
} catch (_) {
  caught = true;
}
try {
  ab.slice();
} catch (_) {}