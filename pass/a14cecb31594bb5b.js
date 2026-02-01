const i32a = new Int32Array(new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
const poisoned = {
  valueOf: function () {}
};
try {
  $DETACHBUFFER(i32a.buffer);
} catch (error) {}