const i64a = new BigInt64Array(new ArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT));
const poisoned = {
  valueOf: function () {}
};