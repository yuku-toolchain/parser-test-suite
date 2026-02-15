const buffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const i32a = new Int32Array(buffer);
const update = 0b00000001000000001000000010000001;
i32a[0] = update;