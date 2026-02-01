const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
const valueOf = {
  valueOf() {
    return 0;
  }
};
const toString = {
  toString() {
    return '0';
  }
};
const toPrimitive = {
  [Symbol.toPrimitive]() {
    return 0;
  }
};
Promise.all([Atomics.waitAsync(i64a, 0, 0n, valueOf).value, Atomics.waitAsync(i64a, 0, 0n, toString).value, Atomics.waitAsync(i64a, 0, 0n, toPrimitive).value]).then(outcomes => {}).then($DONE, $DONE);