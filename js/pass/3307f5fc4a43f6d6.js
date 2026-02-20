let rab = new ArrayBuffer(4, {
  maxByteLength: 20
});
let byteOffset = 1;
let ta = new Int8Array(rab, byteOffset);
let index = {
  valueOf() {
    rab.resize(0);
    return 10;
  }
};
let result = ta.includes(undefined, index);