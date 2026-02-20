const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
const valueOf = {
  valueOf: function () {
    return false;
  }
};
const toPrimitive = {
  [Symbol.toPrimitive]: function () {
    return false;
  }
};