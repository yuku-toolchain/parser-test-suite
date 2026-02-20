const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
const poisonedValueOf = {
  valueOf() {}
};
const poisonedToPrimitive = {
  [Symbol.toPrimitive]() {}
};