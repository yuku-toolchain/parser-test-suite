var ab = new ArrayBuffer(4, {
  maxByteLength: 4
});
var caught = false;
var result;
try {
  result = ab.resize(4);
} catch (_) {
  caught = true;
}
try {
  ab.slice();
} catch (_) {}