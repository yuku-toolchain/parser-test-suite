let ab = new ArrayBuffer(3);
let target = new Int8Array(ab);
target.set([0, 1, 2]);
let result = Int32Array.from.call(function () {
  return target;
}, target, v => {
  if (v === 1) {
    $DETACHBUFFER(ab);
  }
  return v + 10;
});