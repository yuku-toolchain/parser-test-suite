const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
const valueOf = {
  valueOf() {
    return null;
  }
};
const toPrimitive = {
  [Symbol.toPrimitive]() {
    return null;
  }
};