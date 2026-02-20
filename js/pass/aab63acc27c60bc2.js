const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
Promise.all([Atomics.waitAsync(i64a, 0, 0n, -1).value]).then(([outcome]) => {}).then($DONE, $DONE);