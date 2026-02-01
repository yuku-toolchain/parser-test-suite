let rab = new ArrayBuffer(3, {
  maxByteLength: 4
});
let ta = new Int8Array(rab);
let one = {
  valueOf() {
    rab.resize(0);
    return 1;
  }
};
let two = {
  valueOf() {
    rab.resize(4);
    return 2;
  }
};
let result = Int8Array.of.call(function () {
  return ta;
}, one, two, 3);