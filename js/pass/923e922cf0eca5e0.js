const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 8));
let {async, value} = Atomics.waitAsync(i32a, 0, 0, 1000);
value.then(outcome => {}).then(() => $DONE(), $DONE);
Atomics.add(i32a, 0, 1);
Atomics.notify(i32a, 0, 1);