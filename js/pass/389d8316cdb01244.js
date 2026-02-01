const i64a = new BigInt64Array(new ArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
const poisoned = {
  valueOf() {}
};
try {
  $DETACHBUFFER(i64a.buffer);
} catch (error) {}