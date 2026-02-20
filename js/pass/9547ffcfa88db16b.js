let rab = new ArrayBuffer(4, {
  maxByteLength: 20
});
let ta = new Int8Array(rab);
let index = {
  valueOf() {
    rab.resize(0);
    return 10;
  }
};
let result = ta.includes(undefined, index);