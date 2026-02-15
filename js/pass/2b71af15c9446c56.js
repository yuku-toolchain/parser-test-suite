const i64a = new BigUint64Array(new SharedArrayBuffer(BigUint64Array.BYTES_PER_ELEMENT * 8));
const poisoned = {
  valueOf: function () {}
};