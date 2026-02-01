const nonsab = new ArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 8);
const poisoned = {
  valueOf() {}
};