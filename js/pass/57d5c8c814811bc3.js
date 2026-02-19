const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
const valueOf = {
  valueOf() {
    return 0;
  }
};
const toString = {
  toString() {
    return "0";
  }
};
const toPrimitive = {
  [Symbol.toPrimitive]() {
    return 0;
  }
};
Promise.all([Atomics.waitAsync(i32a, 0, 0, valueOf).value, Atomics.waitAsync(i32a, 0, 0, toString).value, Atomics.waitAsync(i32a, 0, 0, toPrimitive).value]).then(outcomes => {}).then($DONE, $DONE);