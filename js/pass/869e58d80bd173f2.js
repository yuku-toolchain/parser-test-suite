const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
const poisonedValueOf = {
  valueOf() {}
};
const poisonedToPrimitive = {
  [Symbol.toPrimitive]() {}
};