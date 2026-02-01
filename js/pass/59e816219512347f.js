const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
Promise.all([Atomics.waitAsync(i32a, 0, 0, -1).value]).then(([outcome]) => {}).then($DONE, $DONE);