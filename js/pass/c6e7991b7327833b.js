let rab = new ArrayBuffer(3, {
  maxByteLength: 5
});
let ta = new Int8Array(rab);
let callCount = 0;
let index = {
  toString() {
    callCount++;
    rab.resize(0);
    return "-";
  }
};
let r = ta.join(index);