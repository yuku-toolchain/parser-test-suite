const nonsab = new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const poisoned = {
  valueOf: function () {}
};