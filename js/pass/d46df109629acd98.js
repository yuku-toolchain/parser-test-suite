const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const poisoned = {
  valueOf: function () {}
};