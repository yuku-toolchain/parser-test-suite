const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
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
Promise.all([Atomics.waitAsync(i32a, 0, 0).value, Atomics.waitAsync(i32a, 0, 0, undefined).value, Atomics.waitAsync(i32a, 0, 0, valueOf).value, Atomics.waitAsync(i32a, 0, 0, toPrimitive).value]).then(outcomes => {}).then($DONE, $DONE);
Atomics.notify(i32a, 0);