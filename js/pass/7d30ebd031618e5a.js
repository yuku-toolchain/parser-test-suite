let ab = new ArrayBuffer(3);
let target = new Int8Array(ab);
let values = new Int8Array([0, 1, 2]);
let result = Int32Array.from.call(function () {
  return target;
}, values, v => {
  if (v === 1) {
    $DETACHBUFFER(ab);
  }
  return v + 10;
});