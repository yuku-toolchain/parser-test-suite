let rab = new ArrayBuffer(10, {
  maxByteLength: 10
});
let autoLength = new Int8Array(rab, 4);
let withLength = new Int8Array(rab, 4, 2);
let start = {
  valueOf() {
    rab.resize(10);
    return 1;
  }
};
rab.resize(0);
let resultAutoLength = autoLength.subarray(start);
rab.resize(0);
let resultWithLength = withLength.subarray(start);