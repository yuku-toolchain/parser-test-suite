let rab = new ArrayBuffer(0, {
  maxByteLength: 1
});
let ta = new Int8Array(rab);
let index = 0;
let value = {
  valueOf() {
    rab.resize(1);
    return 100;
  }
};
ta[index] = value;