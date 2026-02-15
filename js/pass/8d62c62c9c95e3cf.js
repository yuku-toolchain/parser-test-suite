var sab = new SharedArrayBuffer(4, {
  maxByteLength: 5
});
var result;
try {
  result = ab.grow(3);
} catch (_) {}