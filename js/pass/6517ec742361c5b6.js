const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
let {async, value} = Atomics.waitAsync(i32a, 0, 0);
value.then(result => {}, $DONE).then($DONE, $DONE);
Atomics.notify(i32a, 0);