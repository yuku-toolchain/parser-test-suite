let rab = new ArrayBuffer(2, {
  maxByteLength: 5
});
let ta = new Int8Array(rab);
ta[0] = 11;
ta[1] = 22;
let index = 4;
let value = {
  valueOf() {
    rab.resize(5);
    return 123;
  }
};
let result = ta.with(index, value);