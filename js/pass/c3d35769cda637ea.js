const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
const valueOf = {
  valueOf() {
    return undefined;
  }
};
const toPrimitive = {
  [Symbol.toPrimitive]() {
    return undefined;
  }
};
Promise.all([Atomics.waitAsync(i64a, 0, 0n).value, Atomics.waitAsync(i64a, 0, 0n, undefined).value, Atomics.waitAsync(i64a, 0, 0n, valueOf).value, Atomics.waitAsync(i64a, 0, 0n, toPrimitive).value]).then(outcomes => {}).then($DONE, $DONE);
Atomics.notify(i64a, 0);