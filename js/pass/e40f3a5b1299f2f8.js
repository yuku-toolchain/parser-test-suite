let rab = new ArrayBuffer(1, {
  maxByteLength: 4
});
let ta = new Int8Array(rab);
let value = {
  valueOf() {
    rab.resize(4);
    return 123;
  }
};
ta.fill(value);