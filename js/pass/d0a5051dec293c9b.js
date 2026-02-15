var rab = new ArrayBuffer(0, {
  maxByteLength: 4
});
var ta = new Int32Array(rab);
var index = {
  valueOf() {
    rab.resize(4);
    return 0;
  }
};
var count = {
  valueOf() {}
};