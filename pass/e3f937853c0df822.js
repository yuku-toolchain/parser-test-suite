const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
const valueOf = {
  valueOf() {
    return false;
  }
};
const toPrimitive = {
  [Symbol.toPrimitive]() {
    return false;
  }
};
Promise.all([Atomics.waitAsync(i64a, 0, 0n, false).value, Atomics.waitAsync(i64a, 0, 0n, valueOf).value, Atomics.waitAsync(i64a, 0, 0n, toPrimitive).value]).then(outcomes => {}).then($DONE, $DONE);