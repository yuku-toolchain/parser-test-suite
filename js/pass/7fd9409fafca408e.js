const sab = new SharedArrayBuffer(1024);
const ab = new ArrayBuffer(16);
const views = nonClampedIntArrayConstructors.slice();
function ToInteger(v) {
  v = +v;
  if (isNaN(v)) {
    return 0;
  }
  if (v == 0 || !isFinite(v)) {
    return v;
  }
  if (v < 0) {
    return -Math.floor(Math.abs(v));
  }
  return Math.floor(v);
}